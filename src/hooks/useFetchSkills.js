import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../repositories/common/getData';
import { skillsLoaded } from '../redux/skillManager/skillManagerActions';


export default function useFetchSkills() {

    const skillsAvailable = useSelector(state => state.SkillManagerState.skills);

    const dispatch = useDispatch();

    const token = sessionStorage.getItem("token");

    useEffect(() => {

        if (token !== null && skillsAvailable.length === 0) {

            const fetchSkills = async () => {

                const data = await getData('/skill/getall', null, token);

                if (typeof data !== "undefined" && data.status !== 401) {

                    const json = await data.json();

                    dispatch(skillsLoaded(json));
                }
            }
            fetchSkills();
        }

    }, [dispatch, token, skillsAvailable]);

    return skillsAvailable;
}