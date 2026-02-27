
import React, { useState } from 'react';
import { SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { SendIcon } from './icons/Icons';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Footer } from './Footer';

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
        const baseClasses = "peer block w-full px-4 py-3 bg-off-white/70 border border-gray-900/10 rounded-md shadow-sm focus:outline-none focus:ring-0 placeholder-transparent transition-all duration-200";
        const focusClasses = "focus:border-accent focus:bg-white";
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
                              className="text-gray-500 hover:text-accent transition-colors duration-200" 
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
                          <label htmlFor="name" className={`absolute left-4 -top-5 text-xs font-semibold text-gray-600 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:font-semibold ${errors.name ? 'text-red-600' : ''}`}>Name</label>
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
                          <label htmlFor="email" className={`absolute left-4 -top-5 text-xs font-semibold text-gray-600 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:font-semibold ${errors.email ? 'text-red-600' : ''}`}>Email Address</label>
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
                          <label htmlFor="message" className={`absolute left-4 -top-5 text-xs font-semibold text-gray-600 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:font-semibold ${errors.message ? 'text-red-600' : ''}`}>Your Message</label>
                          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                      </div>
                      
                      <div className="flex">
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all duration-200"
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
