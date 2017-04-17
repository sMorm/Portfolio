const React = require('react');


/*
  url for image: that is a string
  filter: transparent color
  title: a string
*/

const Header = (props) => {

const divStyle = {
    marginTop: -16
}
const parallax = {
    backgroundImage: `url(${props.img})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
}
const dStyle = {
    minHeight: '40vw',
    backgroundColor: props.filter
}
const hStyle = {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    width: '100%',
    marginTop: '14vw',
    letterSpacing: 3,
    fontSize: '8vw'
}
  return (
    <div style={ divStyle }>
      <div style={ parallax }>
        <div style={ dStyle }>
          <h1 style={ hStyle }>{props.title}</h1>
        </div>
      </div>
    </div>
  );
}




export default Header;