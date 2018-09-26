import request from '../util/request';  // request �� demo ��Ŀ���ּ����ṩ��һ���� http ����ķ������Ƕ��� fetch �ķ�װ������ Promise



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