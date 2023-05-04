import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="top style2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div id="logo" className="logo">
              <a href="#">
                <img
                  src="https://themesflat.co/html/finance/images/logo-blog.png"
                  alt="logo Finance Business"
                />
              </a>
            </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="flat-open-hours d-flex pr-sm-3 mt-4 mb-3">
              <p className="icon">
                <FaMapMarkerAlt />
              </p>
              <p className="text">
                Address
                <br />
                <span>
                  India : 25/1, Baranashi Ghosh Street Kolkata 700007, India
                  <br /> Usa: 2010 Baltimore Road, Suite F42 Rockville, MD 20851
                </span>
              </p>
            </div>
            <div className="flat-open-hours d-flex mt-sm-4 mb-4">
              <p className="icon">
                <FaPhoneAlt />
              </p>
              <p className="text">
                Contacts
                <br />
                <span className="d-block">
                  India : +91 7003860702, Usa : (240) 481-5325,
                  hello@thedigiebooks.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
