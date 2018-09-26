import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise



export default {
  namespace: 'cubeselectform',
  state: {
    data: [],
      },
  effects: {
    *queryGetSelections(_, sagaEffects) {
	  const listData = {
		  "Cube":["1", "2", "3"],
		  "Cob_Date": ["day1", "day2"],
		  "Topic": ["Delta", "Vege"],
		  "File_Type":["CSV", "ZIP"],
		  "Loading_Status": ["Error","Uploaded","Loading"]
	  };
      const { call, put } = sagaEffects;
	  
      yield put({ type: 'addNewSelection', payload: listData });




    }
  },
  reducers: {
    addNewSelection(state, { payload: newList }) {
      const addList = { ...newList};
      return {
        data: addList,
      };
    }
  },
};