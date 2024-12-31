
import ImagePage from './Imagebanner';
import Header from '@/Layout/Header';

export default function Contact() {
  return (
    <>
    <Header/>
    
    <div className="bg-gray-50">
  
<ImagePage/>
      <header className="bg-gray-800 text-white p-6 text-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-lg">We would love to hear from you!</p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-12">
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>

          <form>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-600">Name</label>
                <input type="text" id="name" className="mt-2 p-3 border border-gray-300 rounded-md" placeholder="Your Name" required />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                <input type="email" id="email" className="mt-2 p-3 border border-gray-300 rounded-md" placeholder="Your Email" required />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm text-gray-600">Subject</label>
                <input type="text" id="subject" className="mt-2 p-3 border border-gray-300 rounded-md" placeholder="Subject" required />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm text-gray-600">Your Message</label>
                <textarea id="message" className="mt-2 p-3 border border-gray-300 rounded-md" rows="4" placeholder="Your Message" required></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="mt-4 bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700">Submit</button>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/3 bg-gray-100 p-6 md:ml-12 mt-8 md:mt-0 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <span className="text-pink-600 mr-3">📞</span>
              <span><a href="tel:+91-9351888150" >+91-9351888150</a></span>
            </div>

            <div className="flex items-center">
              <span className="text-pink-600 mr-3">📧</span>
              <span><a href="mailto:pinkcityinfotek@gmail.com">Pinkcityinfotek@gmail.com</a></span>
            </div>

            <div className="flex items-center">
              <span className="text-pink-600 mr-3">📍</span>
              <span>Alpine tower,101,1st floor, 9 Dukan, Kalwar road, Jaipur,Rajasthan</span>
            </div>
<h6>Follow us</h6>
            <div className="mt-6 flex justify-center space-x-4">
              
              <a href="https://www.facebook.com" target="_blank" className="text-pink-600 hover:text-pink-800">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" className="text-pink-600 hover:text-pink-800">Instagram</a>
              <a href="https://www.youtube.com" target="_blank" className="text-pink-600 hover:text-pink-800">YouTube</a>
              
            </div>
            <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56903.58560285788!2d75.66776277933867!3d26.95188182607403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d63073c19bb%3A0x1e2af28325bef21d!2sPinkcity%20Info%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735026496918!5m2!1sen!2sin"
        width="380"
        height="380"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
           
          </div>
       
        </div>
      </div>
    </div>
    </>
  );
}
