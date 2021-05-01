const initialState = {
    title: '',
    description: '',
    company: {
        name: '',
        activity: ''
    },
    date: '',
    isLanguageMandatoryControl: false,
    language: '',
    languageLevelControl: 0,
    skillsRequired: [],
    zone: '',
    contractInformation: {
        startingFrom: '',
        workingDays: '',
        kindOfContract: '',
    }
}

export function EditCreateJobReducer(state = initialState, action) {

    switch (action.type) {
        case 'CLEAN': return {
            ...state
        };
        case 'SAVE': return {
            title: action.payload.title,
            description: action.payload.description,
            company: {
                name:    action.payload.companyName,
                activity:  action.payload.companyActivity
            },
            date: action.payload.date,
            isLanguageMandatory: action.payload.isLanguageMandatoryControl,            
            language: action.payload.language,
            languageLevel: action.payload.languageLevelControl,
            skillsRequired: [],
            zone: action.payload.workingDays,
            contractInformation: {
                startingFrom: action.payload.startingFrom,
                workingDays: action.payload.workingDays,
                kindOfContract: action.payload.kindOfContract,
            }
        }
        default: return state;
    }

}
