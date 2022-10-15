import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { Height } from '@mui/icons-material';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm("")
    }
  }

  return (
    <Paper
      component="form"
      onSubmit= {handleSubmit}
      sx= {{
        borderRadius: 20,
        border: "1px solid #e33e3e",
        pl:2,
        boxShadow:"none",
        mr: {sm:5},
      }}
    >
      <input 
        className='search-bar'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />
      <IconButton
        type='submit'
        sx={{
          p:"10px",
          color:"red"
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar