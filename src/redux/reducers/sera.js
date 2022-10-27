import { createSlice } from '@reduxjs/toolkit';

export const sera = createSlice({
  name: 'sera',
  initialState: {
    sensors: ["Wind", "Air Temprature", "Humidity"],
    isAdd:false,
    //burasını normalde asyncstorage ye bağlayıp eklemeli yapacaktım ama sera öyle tak diye uygulamadan eklenecek birşey olmadığını düşündüğüm için öyle yapmadım
    seraList: [
      {
        id:0,
        isim:"Sera 1",
        controllers:[
          {
            id:0,
            isim:"Kontrolcü 1-1",
            conditions:[],
            type:"X",
            action:{
              action:"Aç",
              notification:false,
              active:true,
            },
          },
          {
            id:1,
            isim:"Kontrolcü 1-2",
            conditions:[],
            type:"X",
            action:{
              action:"Kapat",
              notification:false,
              active:true,
            },
          },
        ]
      },
      {
        id:1,
        isim: "Sera 2",
        controllers:[
          {
            id:0,
            isim:"Kontrolcü 2-1",
            conditions:[],
            type:"X",
            action:{
              action:"Aç",
              notification:false,
              active:true,
            },
          },
          {
            id:1,
            isim:"Kontrolcü 2-2",
            conditions:[],
            type:"X",
            action:{
              action:"Aç",
              notification:false,
              active:true,
            },
          },
        ]
      },
      {
        id:2,
        isim:"Sera 3",
        controllers:[
          {
            id:0,
            isim:"Kontrolcü 3-1",
            conditions:[],
            type:"X",
            action:{
              action:"Kapat",
              notification:false,
              active:true,
            },
          },
          {
            id:1,
            isim:"Kontrolcü 3-2",
            conditions:[],
            type:"X",
            action:{
              action:"Kapat",
              notification:false,
              active:true,
            },
          },
        ]
      }
    ],
  },
  reducers: {
    changeControllerType:(state,action) => {
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].type = action.payload.type
    },
    changeActive:(state,action) => {
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].action = {
        ...state.seraList[action.payload.seraId].controllers[action.payload.controllerId].action,
        active:action.payload.situation
      }
    },
    changeNotification:(state,action) => {
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].action = {
        ...state.seraList[action.payload.seraId].controllers[action.payload.controllerId].action,
        notification:action.payload.situation
      }
    },
    updateControllerConditions:(state,action) => {
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].conditions = action.payload.conditions;
    },
    updateControllerActions:(state,action) => {
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].action = action.payload.action;
    },
    setIsAdd:(state,action) => {
      state.isAdd = !state.isAdd;
      if(action.payload !== undefined && action.payload !== null) state.addController = action.payload;
    },
    deleteController:(state, action) => {
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].action = {
        action:"",
        notification:false,
        active:false,
      }
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].conditions = [];
      state.seraList[action.payload.seraId].controllers[action.payload.controllerId].type = 'X';
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateControllerConditions, setIsAdd, updateControllerActions, deleteController, changeActive, changeNotification, changeControllerType } = sera.actions

export default sera.reducer