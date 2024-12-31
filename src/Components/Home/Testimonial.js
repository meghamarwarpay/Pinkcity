import Image from "next/image";
import img1 from '../../assets/pinkcityimg/userwoman.png'
import img2 from '../../assets/pinkcityimg/userman.png'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rina S.',
      role: 'Verified Customer',
      feedback:
        'Shopping on PinkCity has been a fantastic experience! The quality of the products is amazing, and delivery is always prompt. Highly recommend!',
      image: img1, // Replace with actual image URL
    },
    {
      name: 'Arvind P.',
      role: 'Frequent Buyer',
      feedback:
        'The customer support team is always ready to help. I had an issue with my order, and they resolved it quickly. Great service!',
      image: img2, // Replace with actual image URL
    },
    {
      name: 'Nisha K.',
      role: 'New Customer',
      feedback:
        'I was impressed by the variety of products on PinkCity. The website is user-friendly, and I got exactly what I needed. Will shop again!',
      image: img1, // Replace with actual image URL
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-pink mb-4">What Our Customers Say</h1>
      <p className="text-center text-secondary mb-5">
        Our customers love us! Read what they have to say about their experience shopping on PinkCity.
      </p>

      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px',  }}
                />
                <h5 className="card-title text-dark">{testimonial.name}</h5>
                <h6 className="text-muted">{testimonial.role}</h6>
                <p className="card-text text-secondary mt-3">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
