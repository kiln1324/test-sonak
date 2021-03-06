var data = {
  main: [
    {
      id: 1,
      img: "intro-img_01.jpg",
      text: "이제야 집에 가는구나... <br/> 어디로 여행이라도 가고 싶다.",
      next: 2,
      선택지: [
        {
          text: "다음",
        },
      ],
    },
    {
      id: 2,
      img: "intro-img_02.jpg",
      text: "뭐지, 꿈인가? 이상한 숲에 들어와 <br/> 한참을 헤메다 정신을 차려보니...",
      next: 3,
      선택지: [
        {
          text: "다음",
        },
      ],
    },
    {
      id: 3,
      img: "intro-img_03.jpg",
      text: "어딘지 알 수 없는 방에 들어와 있었다!",
      next: 4,
      선택지: [
        {
          text: "시작하기",
        },
      ],
    },
    {
      id: 4,
      img: "test-img_01.jpg",
      text: "모래시계가 다 떨어지기 전에 나가야 하는 듯하다. 나는 결심했다. 우선...",
      next: 5,
      선택지: [
        {
          type: "a",
          text: "신중해야 한다. <br/> 천천히 방을 둘러보자.",
        },
        {
          type: "b",
          text: "시간이 없다. <br/> 일단 행동해야 한다.",
        },
      ],
    },
    {
      id: 5,
      img: "test-img_02.jpg",
      text: "처음 눈에 띈 건 책장이었다. <br/> 내가 제일 먼저 집어든 것은...",
      next: 6,
      선택지: [
        {
          type: "c",
          text: "동화책",
        },
        {
          type: "d",
          text: "잡지",
        },
        {
          type: "c",
          text: "소설책",
        },
        {
          type: "d",
          text: "전문서적",
        },
      ],
    },
    {
      id: 6,
      img: "test-img_03.jpg",
      text: "달력을 보니 일정이 적혀있었다.",
      next: 7,
      선택지: [
        {
          type: "a",
          text: "사소한 계획까지 다 짜여져있군. <br/> 생각하지 않아도 돼서 좋아.",
        },
        {
          type: "b",
          text: "아무 것도 없이 내가 정해야 하네, <br/> 자유롭게 짤 수 있어서 좋은데?",
        },
      ],
    },
    {
      id: 7,
      img: "test-img_04.jpg",
      text: "책상 위에서 인형을 발견했다. <br/> ...지금 장난감이 나한테 인사한 거야?",
      next: 8,
      선택지: [
        {
          type: "c",
          text: "마법으로 움직이나 보다.",
        },
        {
          type: "d",
          text: "기술이 엄청 발전했구나.",
        },
      ],
    },
    {
      id: 8,
      img: "test-img_05.jpg",
      text: "창 밖을 보니 어느새 늦어진 시간, <br/> 더 이상 굶으면서 버티긴 힘들다.",
      next: 9,
      선택지: [
        {
          type: "a",
          text: "안전해보이는 빵을 먹는다.",
        },
        {
          type: "b",
          text: "어차피 여기가 어딘지도 모르니,<br/> 새로운 음식에 도전해본다.",
        },
      ],
    },
    {
      id: 9,
      img: "test-img_06.jpg",
      text: "앉아서 음식을 먹고 있는데, <br/> 밖에 신비로운 동물이 지나간다.",
      next: 9999,
      선택지: [
        {
          type: "d",
          text: "유전자 조작의 산물이구나.",
        },
        {
          type: "c",
          text: "동화 속 생물이구나.",
        },
      ],
    },
    {
      id: 9999,
      img: "door_ac.jpg",
      text: "뒤를 돌아보니, <br/> 텅 비어있던 벽에 갑자기 문이 생겨났다.",
      type: "ac",
      선택지: [
        {
          type: "1",
          text: "나무 문으로 나간다.",
          next: "result_chowon.html",
        },
        {
          type: "2",
          text: "얼음 문으로 나간다.",
          next: "result_ice.html",
        },
        {
          type: "3",
          text: "대리석 문으로 나간다.",
          next: "result_wind.html",
        },
      ],
    },
    {
      id: 9999,
      img: "door_ad.jpg",
      text: "뒤를 돌아보니, 텅 비어있던 벽에 갑자기 문이 생겨났다.",
      type: "ad",
      선택지: [
        {
          type: "1",
          text: "왼쪽 문으로 나간다.",
          next: "result_korea.html",
        },
        {
          type: "2",
          text: "오른쪽 문으로 나간다.",
          next: "result_sf.html",
        },
      ],
    },
    {
      id: 9999,
      img: "door_bc.jpg",
      text: "뒤를 돌아보니, 텅 비어있던 벽에 갑자기 문이 생겨났다.",
      type: "bc",
      선택지: [
        {
          type: "1",
          text: "왼쪽 문으로 나간다.",
          next: "result_magic.html",
        },
        {
          type: "2",
          text: "동굴로 나간다.",
          next: "result_jungle.html",
        },
        {
          type: "3",
          text: "창문으로 나간다.",
          next: "result_ocean.html",
        },
      ],
    },
    {
      id: 9999,
      img: "door_bd.jpg",
      text: "뒤를 돌아보니, 텅 비어있던 벽에 갑자기 문이 생겨났다.",
      type: "bd",
      선택지: [
        {
          type: "1",
          text: "위쪽 문으로 나간다.",
          next: "result_highteen.html",
        },
        {
          type: "2",
          text: "아래쪽 문으로 나간다.",
          next: "result_steampunk.html",
        },
      ],
    },
  ],
};
