import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { Row, Col } from 'react-flexbox-grid';
import feather from '../../assets/img/feather.jpg';
import background from '../../assets/img/BLACK_I_desktop-1.jpg';

const style = {
  paper: {
    height: '340px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imgWapper: {
    position: 'relative',
    height: '280px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
  },
  title: {
    position: 'absolute',
    left: '30px',
    bottom: '30px',
    color: '#fff',
    fontSize: '30px',
  },
  avatarWapper: {
    display: 'inline-block',
    height: '60px',
  },
  info: {
    display: 'inline-block',
    height: '40px',
    marginLeft: '20px',
    padding: '10px 0',
    verticalAlign: 'top',
  },
  avatar: {
    marginTop: '10px',
    marginLeft: '30px',
  },
  name: {
    margin: '0',
    fontWeight: 'bold',
  },
  time: {
    margin: '0',
  },
  typeList: {
    height: '30px',
    padding: '15px 0',
    paddingRight: '30px',
    overflow: 'hidden',
  },
  type: {
    float: 'right',
    height: '30px',
  },
  gridMargin: {
    padding: '10px 0',
  },
};

function ArticleOverview() {
  return (
    <div style={style.paper}>
      <Row>
        <Col xs={12}>
          <div className="img-wapper" style={style.imgWapper}>
            <img src={background} alt="" style={style.img} />
            <span className="title" style={style.title}>遇见未来的自己</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <div className="avatar-wapper" style={style.avatarWapper}>
            <Avatar src={feather} style={style.avatar} />
          </div>
          <div className="info" style={style.info}>
            <p style={style.name}>Feather</p>
            <p style={style.time}>2018/12/1</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="typeList" style={style.typeList}>
            <Chip style={style.type}>123</Chip>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ArticleOverview;
