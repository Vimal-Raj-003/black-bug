import React, { useState } from "react";

const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Engineering Services",
        message: ""
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatePhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, "");
        return cleaned.length === 10;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!formData.name || !formData.phone) {
            alert("Please fill Name and Phone Number");
            return;
        }

        if (!validatePhone(formData.phone)) {
            alert("Enter valid 10-digit phone number");
            return;
        }

        const message = `
New Enquiry from Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Message:
${formData.message}
    `;

        const encodedMessage = encodeURIComponent(message);

        //const phoneNumber = "917200090243";
        const phoneNumber = "919943776338";

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        alert("Redirecting to WhatsApp...");
        window.open(url, "_blank");
    };

    return (
        <div className="flex flex-col min-h-screen">

            {/* CONTACT FORM */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* LEFT */}
                        <div className="w-full lg:w-3/5 bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                            <p className="text-gray-500 mb-6">
                                Fill out the form and we’ll respond within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="border p-3 rounded-lg"
                                />

                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Work Email"
                                    type="email"
                                    className="border p-3 rounded-lg"
                                />

                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number (10 digits)"
                                    type="tel"
                                    className="border p-3 rounded-lg"
                                />

                                <input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="border p-3 rounded-lg"
                                />

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="border p-3 rounded-lg"
                                >
                                    <option>Engineering Services</option>
                                    <option>Sourcing Solutions</option>
                                    <option>Costing Analysis</option>
                                    <option>Supplier Quality</option>
                                    <option>VAVE</option>
                                    <option>Other Inquiry</option>
                                </select>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirement..."
                                    className="border p-3 rounded-lg min-h-[120px]"
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                                >
                                    Send Message →
                                </button>

                            </form>
                        </div>

                        {/* RIGHT */}
                        <div className="w-full lg:w-2/5 flex flex-col gap-5">

                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-bold mb-2">Call Us</h3>
                                <a href="tel:+917200090243" className="text-blue-600">
                                    +91 72000 90243
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-bold mb-2">Email</h3>
                                <a href="mailto:sales@hexunotech.com" className="text-blue-600">
                                    sales@hexunotech.com
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;