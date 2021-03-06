import React from 'react';
import Radium from 'radium';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Row, Col } from 'react-flexbox-grid';
import feather from '../../assets/img/feather.jpg';
import background from '../../assets/img/BlackBackground.jpg';

const style = {
  paper: {
    height: '400px',
    overflow: 'hidden',
  },
  imgWapper: {
    position: 'relative',
    height: '340px',
    overflow: 'hidden',
    '@media (max-width: 575px)': {
      height: '300px',
    },
  },
  img: {
    width: '100%',
  },
  motto: {
    position: 'absolute',
    left: '30px',
    bottom: '30px',
    color: '#fff',
    fontSize: '20px',
  },
  author: {
    height: '60px',
  },
  avatar: {
    marginTop: '10px',
    marginRight: '20px',
    marginLeft: '30px',
    lineHeight: '60px',
  },
  name: {
    verticalAlign: 'top',
    lineHeight: '60px',
    fontWeight: 'bold',
  },
};

function Profile() {
  return (
    <Paper style={style.paper}>
      <Row>
        <Col xs={12}>
          <div className="img-wapper" style={style.imgWapper}>
            <img src={background} alt="" style={style.img} />
            <span className="motto" style={style.motto}>遇见未来的自己</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="author" style={style.author}>
            <Avatar src={feather} style={style.avatar} />
            <span className="name" style={style.name}>Feather</span>
          </div>
        </Col>
      </Row>
    </Paper>
  );
}

export default Radium(Profile);
