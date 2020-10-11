import { createSlice } from "@reduxjs/toolkit";

// iid: image id
// id: container id
let lastiid = 5;
let lastid = 2;

const initialState1 = [
  {
    // 처음에 데이터 모으는 곳, 추가, 삭제 가능
    container: [
      {
        id: 1,
        label: "",
        comment: "",
        img: [],
      },
      {
        id: 2,
        label: "",
        comment: "",
        img: [],
      },
      // {
      //   id: 3,
      //   label: "",
      //   comment: "",
      //   img: [],
      // },
    ],
  },

  // 트레이닝에 사용될 데이터 포멧에 맞게 다시 모으는 곳
  {
    data: [],
  },
];

const slice = createSlice({
  name: "imgs",
  initialState: initialState1,
  reducers: {
    //container add
    containerAdd: (state, action) => {
      lastid += 1;
      state[0].container.push({ id: lastid, img: [] });
    },

    //container delete
    containerDel: (state, action) => {
      let remainContainer = state[0].container.filter(
        (x) => x.id != action.payload.id
      );
      state[0].container = remainContainer;
    },

    // img add
    imgsAdd: (state, action) => {
      lastiid += 1;
      let chosenContainer = state[0].container.filter(
        (x) => x.id == action.payload.id
      )[0];
      let imgsrc = action.payload.src;
      chosenContainer.img.push({ iid: lastiid, src: imgsrc });
    },

    // img delete
    imgsDel: (state, action) => {
      let chosenContainer = state[0].container.filter(
        (x) => x.id == action.payload.id
      )[0];
      let modifImgList = chosenContainer.img.filter(
        (x) => x.iid != action.payload.iid
      );

      chosenContainer.img = modifImgList;
    },

    // input 아웃포커스 되면 label update
    imgsLabelUpdate: (state, action) => {
      let chosenContainer = state[0].container.filter(
        (x) => x.id == action.payload.id
      )[0];
      chosenContainer.label = action.payload.label;
      console.log(JSON.stringify(chosenContainer));
      console.log(action.payload.label);
    },

    imgsComUpdate: (state, action) => {
      let chosenContainer = state[0].container.filter(
        (x) => x.id == action.payload.id
      )[0];
      chosenContainer.comment = action.payload.comment;
      console.log(JSON.stringify(chosenContainer));
      console.log(action.payload.coment);
    },

    // reformat data objects
    // is this really necessary? i don't know
    imgsCollect: (state, action) => {
      console.log("Reducer: imgCollect");
      let newObj = state[0].container.map((x) => reformat(x));
      state[1].data = newObj.flat();
      // Object.assign(state[1].data, newObj.flat());
      // console.log(JSON.stringify(state[1].data));
      // console.log("Reducer: imgCollect done");
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  containerAdd,
  containerDel,
  imgsAdd,
  imgsDel,
  imgsLabelUpdate,
  imgsComUpdate,
  imgsCollect,
} = slice.actions;

function reformat(input) {
  let lab = input.label;
  let img = input.img;
  let com = input.comment;
  let newObj = img.map((x) =>
    Object.assign({}, x, { label: lab, iid: x.iid, comment: com })
  );
  return newObj;
}
