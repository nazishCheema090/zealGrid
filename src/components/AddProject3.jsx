import { Button, TextField } from "@mui/material";
import { useProject } from "../context/ProjectContext";




export default function AddProject3() {

  const {setStep} = useProject()
  const handleClick = () => {
    setStep(4); // Change step to 4 to render the Loading component
  }; 

  return (
    <div>
    <div className="ml-20">
      <div className="mb-6">
        <p className="text-xl text-gray-600 mb-3">Step 3 of 3</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-2xl text-gray-700 font-semibold my-3 leading-tight">{`Enter the data of your Company `}</p>
      </div>
      <div className="mb-12">
        <div className='flex'>
          <div className='mr-5'>
            <TextField
              fullWidth
              variant="standard"
              label="Email"
              InputLabelProps={{ className: "text-gray-600" }}
              InputProps={{ className: "text-gray-800" }}
              className="mb-8"
            />
          </div>
          <div className='ml-5'>
            <TextField
              fullWidth
              variant="standard"
              label="Company Name"
              InputLabelProps={{ className: "text-gray-600" }}
              InputProps={{ className: "text-gray-800" }}
              className="mb-8"
            />
          </div>
        </div>
        <div className='mt-3'>
          <TextField
            fullWidth
            variant="standard"
            label="Company Name"
            InputLabelProps={{ className: "text-gray-600" }}
            InputProps={{ className: "text-gray-800" }}
            className="mb-8"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <Button
        variant="contained"
        className="text-white text-lg rounded-full py-3 px-8 shadow-md hover:bg-blue-600 focus:outline-none transition"
        style={{ backgroundColor: '#7065F0', width: '150px', height: '50px', borderRadius: '25px' }}
        onClick={handleClick}
      >
        Continue
      </Button>
    </div>
  </div>
  )
}
