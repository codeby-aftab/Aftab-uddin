
import React, { useState } from 'react';
import { SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { SendIcon, SparklesIcon } from './icons/Icons';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Footer } from './Footer';
import { GoogleGenAI } from "@google/genai";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isRefining, setIsRefining] = useState(false);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleRefine = async () => {
        if (!formData.message.trim()) return;
        
        setIsRefining(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: `Refine the following message for a professional portfolio contact form. Make it concise, professional, and clear while maintaining the original intent: "${formData.message}"`,
                config: {
                    systemInstruction: "You are a professional communication expert. Return ONLY the refined message text, no explanations or additional context.",
                }
            });
            
            const refinedText = response.text?.trim();
            if (refinedText) {
                setFormData(prev => ({ ...prev, message: refinedText }));
            }
        } catch (error) {
            console.error("Failed to refine message:", error);
        } finally {
            setIsRefining(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            const newErrors = { ...errors };
            delete newErrors[name as keyof FormErrors];
            setErrors(newErrors);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Functional implementation: Open user's mail client
            const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            window.location.href = `mailto:${CONTACT_DETAILS.email}?subject=${subject}&body=${body}`;
            
            setIsSubmitted(true);
            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitted(false);
            }, 3000);
        }
    };

    const getInputClasses = (fieldName: keyof FormData) => {
        const baseClasses = "peer block w-full px-4 py-3 bg-off-white/70 border border-gray-900/10 rounded-md shadow-sm focus:outline-none focus:ring-0 placeholder-transparent transition-colors";
        const focusClasses = "focus:border-accent";
        if (errors[fieldName]) {
            return `${baseClasses} border-red-500`;
        }
        return `${baseClasses} ${focusClasses}`;
    };

    return (
        <motion.section
            id="contact"
            className="py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:snap-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <motion.div 
              className="bg-off-white/50 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12"
              variants={sectionVariants}
            >
              <div className="lg:grid lg:grid-cols-5 lg:gap-12">
                <div className="lg:col-span-2 mb-12 lg:mb-0">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
                  <p className="text-lg text-gray-600 mt-4">Have a project in mind or just want to say hi? Feel free to reach out. I'll get back to you as soon as possible.</p>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Find me on</h3>
                    <div className="flex space-x-4">
                      {SOCIAL_LINKS.map(link => (
                          <motion.a 
                              key={link.name} 
                              href={link.href} 
                              className="text-gray-500 hover:text-accent transition-colors" 
                              aria-label={`${link.name} Profile`}
                              whileHover={{ y: -4 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                              data-cursor-hover
                          >
                              <link.icon />
                          </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="relative">
                          <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className={getInputClasses('name')}
                              placeholder="Name"
                              data-cursor-text
                          />
                          <label htmlFor="name" className={`absolute left-4 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${errors.name ? 'text-red-600' : ''}`}>Name</label>
                          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div className="relative">
                           <input
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className={getInputClasses('email')}
                              placeholder="Email Address"
                          />
                          <label htmlFor="email" className={`absolute left-4 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${errors.email ? 'text-red-600' : ''}`}>Email Address</label>
                          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                      </div>
                      <div className="relative">
                          <textarea
                              name="message"
                              id="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              required
                              className={getInputClasses('message')}
                              placeholder="Your Message"
                          />
                          <label htmlFor="message" className={`absolute left-4 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${errors.message ? 'text-red-600' : ''}`}>Your Message</label>
                          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={handleRefine}
                            disabled={isRefining || !formData.message}
                            className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-gray-900/20 rounded-md shadow-sm text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100`}
                            data-cursor-hover
                        >
                          <SparklesIcon />
                          {isRefining ? 'Refining...' : 'Refine with AI'}
                        </button>
                        <button
                            type="submit"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-accent hover:bg-accent-light focus:outline-none transition-all transform hover:scale-[1.02]"
                            data-cursor-hover
                        >
                          <SendIcon />
                          {isSubmitted ? 'Mail Client Opened!' : 'Send Message'}
                        </button>
                      </div>
                  </form>
                </div>
              </div>
            </motion.div>
            <Footer />
        </motion.section>
    );
};
