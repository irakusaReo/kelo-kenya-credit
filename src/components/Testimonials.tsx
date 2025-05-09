
import React from 'react';

const testimonials = [
  {
    content: "Kelo helped my small electronics shop offer installment payments to customers. Our sales have increased by 30% since we started using the platform.",
    author: "James Mwangi",
    role: "Shop Owner, Nairobi",
  },
  {
    content: "The application process was quick and easy. I was able to get a new laptop for my studies and pay for it over 3 months without any hidden fees.",
    author: "Amina Wanjiku",
    role: "University Student",
  },
  {
    content: "As a salon owner, Kelo has allowed me to get inventory when I need it and pay as my business generates revenue. It's really helping me grow.",
    author: "Faith Njeri",
    role: "Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="kelo-container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from merchants and consumers who are already benefiting from Kelo's BNPL services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-fade-up rounded-lg bg-white p-6 shadow-md border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex h-12 items-center">
                <svg width="45" height="30" className="fill-kelo-blue opacity-20">
                  <path d="M13.84 30c-4.62 0-8.4-1.5-11.35-4.48C.85 22.54 0 18.18 0 12.44 0 5.96 1.55 1.82 4.64 0l2.05 4.17C4.67 5.23 3.38 8.15 3.38 13.6c0 2.8.43 3.93 1.28 5.3.86 1.4 2.14 2.1 3.84 2.1 2.27 0 3.96-1.74 3.96-4.1 0-2.24-1.58-3.84-3.96-3.84-.43 0-.86.2-1.28.43l-1.72-3.95c.43-.44 2.14-.87 3.84-.87 4.27 0 7.27 3.04 7.27 7.9 0 7.5-3.5 13.43-8.77 13.43zm21.6 0c-4.62 0-8.4-1.5-11.36-4.48-2.14-2.98-2.98-7.34-2.98-13.08 0-6.48 1.54-10.62 4.63-12.44L27.8 4.17c-2.15 1.06-3.43 3.98-3.43 9.43 0 2.8.43 3.93 1.28 5.3.86 1.4 2.14 2.1 3.84 2.1 2.27 0 3.97-1.74 3.97-4.1 0-2.24-1.6-3.84-3.97-3.84-.43 0-.86.2-1.28.43l-1.72-3.95c.43-.44 2.14-.87 3.84-.87 4.27 0 7.27 3.04 7.27 7.9 0 7.5-3.5 13.43-8.77 13.43z"></path>
                </svg>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.content}</p>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-kelo-blue to-kelo-teal"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
