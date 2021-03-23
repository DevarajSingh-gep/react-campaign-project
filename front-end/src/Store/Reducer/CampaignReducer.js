import * as campaignAction from '../Action/CampaignAction';

const initialState = { 
    tabs: [
        {
            name: 'Upcomming campaigns',
            isActive: true
        },
        {
            name: 'Live campaigns',
            isActive: false
        },
        {
            name: 'Past campaigns',
            isActive: false
        }
    ],
    tableData: {
      header: [
          {
              name: 'Date'
          },
          {
              name: 'Campaign'
          },
          {
              name: 'View'
          },
          {
              name: 'Action'
          }
      ],
      data:null
  },
  loading: false,
  activeIndex: 0
};

export const campaignReducer = (state = initialState , action) => {
    switch(action.type) {
        case campaignAction.CAMPAIGN_LIST_REQUEST: {
            return {
                ...state,
                tabs: [...state.tabs],
                tableData: {
                    ...state.tableData,
                    header: [...state.tableData.header]
                },
                loading: true
            }
        }
        case campaignAction.CAMPAIGN_LIST_SUCCESS: {
            console.log("data"+ action.payload);
            return{
                ...state,
                tabs: [...state.tabs],
                tableData: {
                    ...state.tableData,
                    header: [...state.tableData.header],
                    data: action.payload
                },
                loading: false
            }
        }
        case campaignAction.CAMPAIGN_LIST_FAIL: {
            return {
                ...state,
                tabs: [...state.tabs],
                tableData: {
                    ...state.tableData,
                    header: [...state.tableData.header]
                },
                loading: true,
                error: action.payload
            }
        } 
        case campaignAction.CHANGE_TAB: {
            const [...tabs] = [...state.tabs];
            tabs.map((tab, i)=>{
                if(tabs[i].isActive) {
                    tabs[i].isActive = false;
                }
                if(i === action.payload) {
                    tabs[i].isActive = true;
                }
            });

            return {
                ...state,
                tabs: tabs,
                tableData: {
                    ...state.tableData,
                    header: [...state.tableData.header],
                    data: [...state.tableData.data]
                },
                activeIndex: action.payload
            }
        }
    }
    return { ...state };
}