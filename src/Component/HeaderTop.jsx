import '../Css/Headercss.css';

const HeaderTop = () => {
  return (
    <div
      style={{
        backgroundColor: '#1C4670',
        color: 'white',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '5px 10px',
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center flex-wrap"
        style={{
          width: '',
          maxWidth: '1440px',
          flexDirection: 'row',
          gap: '10px',
          marginRight: '122px',
        }}
      >
        {/* Contact Section */}
        <div
          className="d-flex align-items-center flex-wrap"
          style={{
            gap: '10px',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div className="d-flex align-items-center">
            <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
            <span>www.registerkaro.in</span>
          </div>
          <span>|</span>
          <div className="d-flex align-items-center">
            <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
            <span>+918447746183</span>
          </div>
          <span>|</span>
        </div>

        {/* Social Media Section */}
        <div
          className="d-flex align-items-center flex-wrap"
          style={{
            gap: '15px',
            justifyContent: 'center',
          }}
        >
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
