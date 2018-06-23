import { React, Component, connect } from '../../packages';
import { Thumbnail } from '../';
import './style.scss';

class List extends Component {
  render() {

    let list = this.props.list.list.map((item, i) => {
      return (
        <div className="list-item flex jc-sb" key={i}>
          <Thumbnail post={item} />
          <div className="info flex fd-c">
            <h1>{item.rating}%</h1>
            <p>{item.note}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="List">
        {list}
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
