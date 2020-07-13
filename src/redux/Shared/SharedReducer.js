const initialState = {
    openSkillsManager: false,
    skillsToManage: []
}

export function SharedReducer(state = initialState, action) {

    switch (action.type) {
        case 'OPEN_SKILLS_MANAGER': return {
            ...state,
            openSkillsManager: true
        };
        case 'CLOSE_SKILLS_MANAGER': return {
            ...state,
            openSkillsManager: false
        }
        case 'SET_SKILLS_TO_MANAGE': return {
            ...state,
            skillsToManage: action.payload
        }
        default: return state;
    }
}