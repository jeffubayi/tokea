import { FiHome, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container } from '../styles/components/MobileMenu';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function MobileMenu() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 960 ? (
        <section >
          <footer>
            <div style={{ display: 'flex', gap: "2rem", justifyContent: "space-between", padding: " 6rem 6rem  0 6rem" }}>

              <div >
                <svg
                  className="logo"
                  height="26"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 430.63 119.44"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path d="M26.79,117.05l-3.14-71L3,48.22l-3-27,74.84-3.7L76.69,44,56,44.52l-.92,74.32Z" />
                      <path d="M113.05,119.44,86.25,112l-4.8-74.68,14.6-16.61,46.75-3.47L155,39.62l-6.65,74.8Zm13.86-23.9,3.69-44.09L118,45,107,51.21l1.48,46.36,10,5Z" />
                      <path d="M161.23,118.25l-1.1-98.71,24.2-2.39,1.85,41.23,12.57-3.59,8.87-37.28,24.94,1.19L222.4,64.59l-8,2,18.11,49.24-24.94,1.55L192.46,71.28l-5,1.32,1.85,43.26Z" />
                      <path d="M253.32,119.08l-16.26-9,2-90.46L301,16.79l2.4,28.08-38.25,3.71L265,62.2l34.55-1.91L297.3,78.21l-32.33,1L264.41,96,301,92.32l3,22.1Z" />
                      <path d="M356,117.05v-4.3l-32.34,3.94L310.3,98.17l2.41-33.34L351,58.74,350.4,45l-12.75.84.56,8.6L312.71,56l-4.25-33.34,39.54-6,29.75,6,2.4,92.85Zm-3.14-43.73-14.05,2-.55,12.19,17,2.62Z" />
                      <path
                        d="M420.1,85.7l-23.19-1.4-9.63-70L395.41.84,422.65,0l8,17.14Zm-24.39,7.87,25.89,1.68-1.81,21.36-22.27.56-4.22-11.8Z"
                        style={{ fill: '#c10f1a' }}
                      />
                    </g>
                  </g>
                </svg>
                <div style={{ marginTop: "0.6rem" }}>
                  <h6 >{`©${new Date().getFullYear()}. TOKEA!`}</h6>
                  <h6 >All Rights Reserved</h6>
                </div>
              </div>
              <div >
                <h5 style={{ marginBottom: "0.7rem", color: '#6B7280' }}>Links</h5>
                <h6 >About Us</h6>
                <h6 > Privacy Policy</h6>
                <h6 >Terms & Conditions</h6>
              </div>
              <div >
                <h5 style={{ marginBottom: "0.9rem", color: '#6B7280' }}>Connect with us</h5>
                <div style={{ display: 'flex', gap: "1.5rem" }}>
                  <div>
                    <FaFacebook size={20} color="#1F2937" />
                  </div>
                  <div>
                    <FaTwitter size={20} color="#1F2937" />
                  </div>
                  <div>
                    <FaInstagram size={20} color="#1F2937" />
                  </div>
                </div>
              </div>
              <div >
                <h5 style={{ marginBottom: "0.7rem", color: '#6B7280' }}>Contact Us</h5>
                <h6 >Kiambu Road - Nairobi,Kenya</h6>
                <h6 ><strong>Email:</strong>  info@tokea.com</h6>
              </div>
            </div>
          </footer>
        </section>
      ) : (
        <Container>
          <div>
            <a>
              <FiHome size={20} color="#3e3e3e" />
              <span>Home</span>
            </a>
            <a>
              <FiSearch size={20} />
              <span>Search</span>
            </a>
            <a>
              <FiShoppingCart size={20} />
              <span>Booking</span>
            </a>
            <a>
              <FiUser size={20} />
              <span>Login</span>
            </a>
          </div>
        </Container>
      )}
    </>
  );
}
