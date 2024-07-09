import { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAi'
import OpenAI from 'openai'

const GptSearchBar = () => {
  const searchText = useRef(null);
  
  const handleGptSearch = async() => {
    console.log(searchText.current.value);
    // make api call to get the searched results
    const gptQuery = "Act as a movie recommandation system and suggest some movies for the query " + searchText.current.value + "onlu give me name of 5 movies, comma seperated like the example result given a head . Example Result: Gadar , sholey , Don , Golmaal, Heropanti  ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText.current.value }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
  } 
      const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 (' onSubmit={(e) => e.preventDefault()}>
            <input ref = {searchText}
            type='text' className='col-span-9 p-4 m-4 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className=' col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg 'onClick={handleGptSearch}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
