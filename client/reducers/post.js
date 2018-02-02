const SET = 'post/SET';

const initState = {
  prev: null,
  curr: {
    id: 1,
    work: "Mad Men",
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
      },
      {
        title: "Title 2",
        youtubeId: "E7D06nihhq8",
        content: [
          "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
          "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
        ]
      },
      {
        title: "Title 3",
        youtubeId: "xb8wYSjahpY",
        content: [
          "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
          "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
        ]
      },
      {
        title: "Title 4",
        youtubeId: "Ln0CS34BZNs",
        content: [
          "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
          "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
        ]
      },
      {
        title: "Title 5",
        youtubeId: "MoDd8cpqSBY",
        content: [
          "Ut pretium, elit eget <span class='hi-green'>interdum</span> ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.",
          "Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
        ]
      },
    ]
  },
  next: null
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState = action.payload;
      return Object.assign({}, state, editState);

    default: return state;
  }
}

export function set(post) {
  return {
    type: SET,
    payload: post
  }
}
