const initialState = {
    showSkillsManager: false,
    skillsToManage: [],
    skills: []
}

export function SkillManagerReducer(state = initialState, action) {

    switch (action.type) {
        case 'OPEN_SKILLS_MANAGER': return {
            ...state,
            showSkillsManager: true
        };
        case 'CLOSE_SKILLS_MANAGER': return {
            ...state,
            showSkillsManager: false
        }
        case 'SET_SKILLS_TO_MANAGE': return {
            ...state,
            skillsToManage: action.payload
        }
        case 'SKILLS_LOADED': return{
            ...state,
            skills: action.payload
        }
        default: return state;
    }
}