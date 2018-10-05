import { React, Component, connect } from '../../packages';
import { Thumbnail } from '../';
import './style.scss';

class List extends Component {
  render() {

    let list = this.props.list.list.map((item, i) => {
      return (
        <Thumbnail post={item} key={i} rating={i+1} />
      );
    });

    return (
      <div id="List">
        <div className="list-container flex">
          {list}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(List);
