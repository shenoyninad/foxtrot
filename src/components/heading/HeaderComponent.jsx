import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderComponent.scss';

const cx = classNames.bind(styles);

class HeaderComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={cx('foxtrot-heading')}>
        <h1>foxtrot</h1>
      </div>
    );
  }
}

export default HeaderComponent;