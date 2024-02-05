import React, {useState} from "react";
import {MDBValidation, MDBInput, MDBBtn} from "mdb-react-ui-kit";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {toast} from "react-toastify"

//bokonwrt

const initialState ={
  title:"",
  description:"",
  category:"",
  imageUrl:""
}

const options =["Tech", "Network","InformationTechnology","Fahion","Travel","Fitness","Sports","Food"];

const AddEditBlog = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg,setCategoryErrMsg] = useState(null);
  const {title,description,category,imageUrl} = formValue;

  const navigate = useNavigate();

  const getData = () => {
      let today  = new Date();
      let dd = String(today.getDate()).padStart(2,"0");
      let mm = String(today.getMonth()+1).padStart(2,"0");//january is 0
      let yyyy = today.getFullYear();
      today = mm + "/" + dd+"/"+yyyy;
      return today;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!category){
      setCategoryErrMsg("Please select a category");
    }
    if(title && description && imageUrl && category){
      const currentDate = getData();
      //const updatedBlogData ={...FormValue,date: currentDate};
      //const response = await axois.post("http://localhost:5000/blog")
    }
  };

  const onInputChange = (e) => {
    //let {name, value} = e.target;
  //  setFormValue({...formValue, [name]: value});
  };

  const onUploadImage = (file) => {
      console.log("file", file);
      const formData = new FormData();
      formData.append("file",file);
      formData.append("upload_preset","bokonwrt");
      axios
      .post("http://api.cloudinary.com/v1_1/dspzmadik/image/upload", formData)
      .then((resp) => {
        toast.info("Image Uploaded Successfully");
        setFormValue({...formValue, imageUrl: resp.data.url});
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });

  };

  const onCategoryChange =(e) => {
    setCategoryErrMsg(null);
    setFormValue({...formValue, category: e.target.value});

  };

  return (
    <MDBValidation className="row g-3" style={{marginTop:"100px"}} noValidate onSubmit={handleSubmit}>
        <p className="fs-2 fw-bold">Add Blog</p>
        <div
          style={{
            margin: "auto",
            padding:"15px",
            maxWidth:"400px",
            alignWidth:"center"
          }}>
          <MDBInput
            value={title || ""}
            name = "title"
            type=  "text"
            onChange={onInputChange}
            required
            label="Title"
            validation="Please provide a title"
            invalid
            />
            <br/>
            <MDBInput
            value={description || ""}
            name = "description"
            type=  "text"
            onChange={onInputChange}
            required
            label="Description"
            validation="Please provide a description" 
            textarea
            row={4}
            invalid
            />
            <br/>
            <MDBInput
            type=  "file"
            OnChange={(e)=> onUploadImage(e.target.files[0])}
            required
            validation="Please provide a title"
            invalid
            />
            <br/>
            <select className="categoryDropdown" onChange={onCategoryChange} value={category}>
            <option>Please select category</option>
             {options.map((option,index)=>(
              <option value={option || ""} key={index}>
                {option}
              </option>
             ))}
            </select>
            {categoryErrMsg &&(
              <div className="categoryErrMsg">{categoryErrMsg}</div>

            )}
            
            <br/>
            <br/>
            <MDBBtn type="sumbit" style={{marginRight: "10px"}}>Add</MDBBtn>
            <MDBBtn color="danger" style={{marginRight: "10px"}} onClick={() => navigate("/")}>
              Go Back</MDBBtn>

        </div>
    </MDBValidation>

  );
};

export default AddEditBlog;
