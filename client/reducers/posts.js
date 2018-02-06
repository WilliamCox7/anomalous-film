const SET = 'posts/SET';
const TRAN = 'posts/TRAN';

const initState = {
  length: 5,
  posts: [
    {
      id: 1,
      index: 0,
      work: "Test 1",
      title: "The Wheel",
      thumbnail: "https://conversations.marketing-partners.com/wp-content/uploads/2012/09/madmen_title6101.jpg",
      sections: [
        {
          title: "Title 1",
          youtubeId: "hB_0wkEHa6o",
          content: [
            "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
            "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
          ]
        }
      ]
    },
    {
      id: 2,
      index: 1,
      work: "Test 2",
      title: "The Wheel",
      thumbnail: "https://conversations.marketing-partners.com/wp-content/uploads/2012/09/madmen_title6101.jpg",
      sections: [
        {
          title: "Title 2",
          youtubeId: "E7D06nihhq8",
          content: [
            "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
            "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
          ]
        }
      ]
    },
    {
      id: 3,
      index: 2,
      work: "Test 3",
      title: "The Wheel",
      thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
      sections: [
        {
          title: "Title 3",
          youtubeId: "xb8wYSjahpY",
          content: [
            "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
            "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
          ]
        }
      ]
    }
  ]
}

const test1 = {
  id: 4,
  index: 3,
  work: "Test 4",
  title: "The Wheel",
  thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
  sections: [
    {
      title: "Title 4",
      youtubeId: "Ln0CS34BZNs",
      content: [
        "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
        "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      ]
    }
  ]
}

const test2 = {
  id: 5,
  index: 4,
  work: "Test 5",
  title: "The Wheel",
  thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
  sections: [
    {
      title: "Title 5",
      youtubeId: "MoDd8cpqSBY",
      content: [
        "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
        "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      ]
    }
  ]
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.posts = action.payload;
      return Object.assign({}, state, editState);

    case TRAN:
      if (action.payload > 1 && action.payload < editState.length - 1 && editState.length !== editState.posts.length) {
         editState.posts.push(test1)
      }
      return Object.assign({}, state, editState);

    default: return state;
  }
}

export function set(posts) {
  return {
    type: SET,
    payload: posts
  }
}

export function handleTransition(index) {
  return {
    type: TRAN,
    payload: index
  }
}
