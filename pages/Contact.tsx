
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-body text-slate-900 dark:text-slate-100">
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-16 lg:py-24 overflow-hidden">
            {/* Dynamic Video Background */}
            <div className="absolute inset-0 z-0">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
                    <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6 font-display">
                        Let's Engineer Success <span className="text-primary">Together</span>
                    </h1>
                    <p className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                        Whether you need precise Costing, strategic Sourcing, or robust Supplier Quality solutions, our team is ready to accelerate your engineering goals.
                    </p>
                </div>
            </div>
        </section>

        {/* Main Content Area: Split Layout */}
        <section className="py-12 lg:py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
                    {/* Left Column: Contact Form */}
                    <div className="w-full lg:w-3/5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 lg:p-10">
                        <div className="mb-8">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight mb-2 font-display">Send us a Message</h2>
                            <p className="text-slate-500 dark:text-slate-400">Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col md:flex-row gap-6">
                                <label className="flex flex-col flex-1">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 font-display">Full Name</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">person</span>
                                        </div>
                                        <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 pl-10 pr-4 placeholder:text-slate-400 transition-colors" placeholder="John Doe" type="text" />
                                    </div>
                                </label>
                                <label className="flex flex-col flex-1">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 font-display">Work Email</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </div>
                                        <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 pl-10 pr-4 placeholder:text-slate-400 transition-colors" placeholder="john@company.com" type="email" />
                                    </div>
                                </label>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <label className="flex flex-col flex-1">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 font-display">Phone Number</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">phone</span>
                                        </div>
                                        <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 pl-10 pr-4 placeholder:text-slate-400 transition-colors" placeholder="+1 (555) 000-0000" type="tel" />
                                    </div>
                                </label>
                                <label className="flex flex-col flex-1">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 font-display">Company Name</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">business</span>
                                        </div>
                                        <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 pl-10 pr-4 placeholder:text-slate-400 transition-colors" placeholder="Your Company Ltd." type="text" />
                                    </div>
                                </label>
                            </div>
                            <label className="flex flex-col w-full">
                                <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 font-display">Service of Interest</span>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">engineering</span>
                                    </div>
                                    <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 pl-10 pr-10 transition-colors">
                                        <option>Engineering Services</option>
                                        <option>Sourcing Solutions</option>
                                        <option>Costing Analysis</option>
                                        <option>Supplier Quality</option>
                                        <option>VAVE (Value Analysis/Value Engineering)</option>
                                        <option>Other Inquiry</option>
                                    </select>
                                </div>
                            </label>
                            <label className="flex flex-col w-full">
                                <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-normal pb-2 font-display">How can we help?</span>
                                <textarea className="form-textarea w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary min-h-[140px] p-4 placeholder:text-slate-400 resize-y transition-colors" placeholder="Tell us about your project requirements..."></textarea>
                            </label>
                            <button className="mt-2 w-full md:w-auto md:self-start bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 font-display" type="submit">
                                <span>Send Message</span>
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg font-display mb-1">Our Headquarters</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                        123 Tech Park, Engineering Blvd<br />
                                        Suite 400, Innovation District<br />
                                        San Francisco, CA 94107
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg font-display mb-1">Email Us</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">For general inquiries:</p>
                                    <a className="text-primary hover:underline font-medium" href="mailto:info@hexuno.com">info@hexuno.com</a>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg font-display mb-1">Call Us</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">Mon-Fri from 9am to 6pm PST.</p>
                                    <a className="text-primary hover:underline font-medium text-lg" href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 h-80 relative group">
                            <img alt="Map view of San Francisco downtown area with streets and buildings" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIihVlWiMOx-F8JPzl3ziJiqqQ_nr58DmUDUcAxgKbyrdKW2LOZaBkOZZHz9qQcHqYvlayKfxmfv3vZqusuRLmN8cRcXd4ydIuwZj_EhjCiWG24QFqJhdgqfNnvbumlRjWFLmNV9ahyebWjGI7H7DVGYe58s38wdciQWXLZ5fhYDyLlZiyIH6L_Qz7dlSTPQ4tnUYOpr8neeLC1gAj0np2ebIq-ei8eslgksPIF1PFvEQ4N7sEW1U6ElJwe2UG5xkVaW9fOutGNl4" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Office Location</p>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">San Francisco, CA</p>
                                </div>
                                <button className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors transform hover:-translate-y-1">
                                    <span className="material-symbols-outlined">near_me</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold font-display">Common Questions</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Quick answers to help you get started.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-3 p-6 rounded-xl bg-background-light dark:bg-slate-800/50">
                        <div className="text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">schedule</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">What are your response times?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">We typically respond to all new inquiries within 24 hours during business days. Urgent engineering support requests are prioritized.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 rounded-xl bg-background-light dark:bg-slate-800/50">
                        <div className="text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">public</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Do you work internationally?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Yes, Hexuno Technologies supports global sourcing and engineering projects across North America, Europe, and Asia.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 rounded-xl bg-background-light dark:bg-slate-800/50">
                        <div className="text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">handshake</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Looking for a partnership?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">We are always open to strategic partnerships. Please select "Other Inquiry" in the contact form to discuss collaboration.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Contact;
