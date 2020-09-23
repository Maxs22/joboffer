export const openSkillsManager = {
    type: 'OPEN_SKILLS_MANAGER'
}

export const closeSkillsManager = {
    type: 'CLOSE_SKILLS_MANAGER'
}

export const setSkillsToManage = {
    type: 'SET_SKILLS_TO_MANAGE'
}

export function skillsLoaded(skills) {
    return {
        type: 'SKILLS_LOADED',
        payload: skills
    }
}