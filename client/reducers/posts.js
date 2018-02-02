const SET = 'posts/SET';

const initState = [
  {
    id: 1,
    work: "Mad Men",
    title: "The Wheel",
    thumbnail: "https://conversations.marketing-partners.com/wp-content/uploads/2012/09/madmen_title6101.jpg",
    sections: [
      {
        title: "Title 1",
        youtubeId: "hB_0wkEHa6o",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 2",
        youtubeId: "E7D06nihhq8",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 3",
        youtubeId: "xb8wYSjahpY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 4",
        youtubeId: "Ln0CS34BZNs",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 5",
        youtubeId: "MoDd8cpqSBY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
    ]
  },
  {
    id: 2,
    work: "Mad Men",
    title: "The Wheel",
    thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
    sections: [
      {
        title: "Title 1",
        youtubeId: "hB_0wkEHa6o",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 2",
        youtubeId: "E7D06nihhq8",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 3",
        youtubeId: "xb8wYSjahpY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 4",
        youtubeId: "Ln0CS34BZNs",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 5",
        youtubeId: "MoDd8cpqSBY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
    ]
  },
  {
    id: 3,
    work: "Mad Men",
    title: "The Wheel",
    thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
    sections: [
      {
        title: "Title 1",
        youtubeId: "hB_0wkEHa6o",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 2",
        youtubeId: "E7D06nihhq8",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 3",
        youtubeId: "xb8wYSjahpY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 4",
        youtubeId: "Ln0CS34BZNs",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 5",
        youtubeId: "MoDd8cpqSBY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
    ]
  },
  {
    id: 4,
    work: "Mad Men",
    title: "The Wheel",
    thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
    sections: [
      {
        title: "Title 1",
        youtubeId: "hB_0wkEHa6o",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 2",
        youtubeId: "E7D06nihhq8",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 3",
        youtubeId: "xb8wYSjahpY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 4",
        youtubeId: "Ln0CS34BZNs",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 5",
        youtubeId: "MoDd8cpqSBY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
    ]
  },
  {
    id: 5,
    work: "Mad Men",
    title: "The Wheel",
    thumbnail: "https://pmcvariety.files.wordpress.com/2017/07/mad-men.jpg?w=700&h=393&crop=1",
    sections: [
      {
        title: "Title 1",
        youtubeId: "hB_0wkEHa6o",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 2",
        youtubeId: "E7D06nihhq8",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 3",
        youtubeId: "xb8wYSjahpY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 4",
        youtubeId: "Ln0CS34BZNs",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
      {
        title: "Title 5",
        youtubeId: "MoDd8cpqSBY",
        content: "Ut pretium, elit eget interdum ultricies, nisi odio eleifend odio, sit amet luctus neque odio quis lorem. Maecenas pulvinar pharetra mauris. Maecenas mollis libero eget leo hendrerit, vel aliquet mi lobortis.\n\n Vivamus accumsan massa sit amet erat porttitor, eget viverra quam imperdiet. Aliquam vitae dui mollis, suscipit sem at, tristique quam. Nam scelerisque porta metus ut gravida. Maecenas efficitur faucibus ex, quis efficitur eros tempus et."
      },
    ]
  }
];

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.posts = action.payload;
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
