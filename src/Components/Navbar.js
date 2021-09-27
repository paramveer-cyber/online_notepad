import React, {useState}from 'react'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

export default function Navbar(props) {
    const [textinput, settextinput] = useState("")
    const changetext = (event)=>{
        settextinput(event.target.value)
    }
    const new_ = ()=>{
        settextinput("")
    }
    const open_ = ()=> {
        let input = document.querySelector('input[type="file"]')
        document.getElementById("openfileInput").click()
        input.addEventListener('change', function(e){
            const reader = new FileReader()
            reader.readAsText(input.files[0])
            reader.onload = function(){
                settextinput(reader.result)
            }
        }, false)
    }
    const save_ = ()=>{
        const element = document.createElement("a");
        const file = new Blob([textinput], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "OnlineNotepad.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    const new_tab_ = ()=>{
        window.open("https://online-notepad-exe.herokuapp.com/");
    }
    const cut_ = ()=>{
        navigator.clipboard.writeText(textinput);
        settextinput("")
    }
    const paste_ = async ()=> {
        let a = await navigator.clipboard.readText()
        settextinput(textinput+a)
    }
    const selectAllText = () => {
        let a = document.getElementById("box");
        a.focus();
        a.select();
    };
    var a = 1;
    const bold_ =()=>{
        if (a === 1){
            a = a+1;
            document.getElementById("box").style.fontWeight = 'bold';
        }
        else{
            a = a-1;
            document.getElementById("box").style.fontWeight = 'normal';
        }
    }
    var b = 1;
    const italic_ =()=>{
        if (b === 1){
            b = b+1;
            document.getElementById("box").style.fontStyle = 'italic';
        }
        else{
            b = b-1;
            document.getElementById("box").style.fontStyle = 'normal';
        }
    }
    var c = 1;
    const underline_ =()=>{
        if (c === 1){
            c = c+1;
            document.getElementById("box").style.textDecoration = 'underline';
        }
        else{
            c = c-1;
            document.getElementById("box").style.textDecoration = 'none';
        }
    }
    const font_size_ =()=>{
        var e = document.getElementById("font_size");
        var strUser = e.value;
        document.getElementById("box").style.fontSize = strUser;
    }
      return (
          <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="account">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            File
                        </a>
                        <ul className="dropdown-menu active" aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item" onClick={new_}><img src="https://icon-library.com/images/icon-new/icon-new-23.jpg" alt="idk" width="30" />  New</button></li>
                            <input id="openfileInput" type="file" className="inputopen" />
                            <li><button className="dropdown-item" onClick={open_} href="##"><img src="https://www.vhv.rs/dpng/d/52-524483_open-file-icon-png-transparent-png.png" alt="idk" width="25" />    Open</button></li>
                            <li><button className="dropdown-item" onClick={save_} href="##"><img src="https://image.flaticon.com/icons/png/512/25/25398.png" alt="idk" width="20" />     Save</button></li>
                            <li><button className="dropdown-item" onClick={new_tab_} href="##"><img src="data:image/png;base64,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" alt="idk" width="20" />New Tab</button></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Edit
                        </a>
                        <ul className="dropdown-menu active" aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item" onClick={cut_}><img src="https://w7.pngwing.com/pngs/696/896/png-transparent-gray-scissors-illustration-logo-scissors-cut-logo-scissors-application-thumbnail.png" alt="idk" width="25" />Cut</button></li>
                            <li><button className="dropdown-item" onClick={() =>  navigator.clipboard.writeText(textinput)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LllqQAm9HgKv8aiJogJCgcCE_YZF6Wy3k9T2sLg5xG6aQMlJ4M8Zr1_RRvq1i1kTgsU&usqp=CAU" alt="idk" width="25" />Copy</button></li>
                            <li><button className="dropdown-item"  onClick={paste_} id="paste_"><img src="https://e7.pngegg.com/pngimages/124/792/png-clipart-computer-icons-cut-copy-and-paste-clipboard-icon-design-font-symbol-miscellaneous-text.png" alt="idk" width="25" />Paste</button></li>
                            <li><button className="dropdown-item" onClick={selectAllText} ><img src="https://cdn-icons-png.flaticon.com/512/60/60833.png" alt="idk" width="25" />Select All</button></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active " aria-current="page" href="##">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="white"></div>
        <FolderOpenIcon onClick={open_} className="abcd"></FolderOpenIcon>
        <DownloadIcon onClick={save_} className="abcd1"></DownloadIcon >
        <ContentCutIcon onClick={cut_} className="abcd2"></ContentCutIcon >
        <ContentCopyIcon onClick={() =>  navigator.clipboard.writeText(textinput)} className="abcd3"></ContentCopyIcon >
        <div className="hr1" />
        <ContentPasteIcon onClick={paste_} className="abcd4"></ContentPasteIcon>
        <FormatBoldIcon onClick={bold_} className="abcd5" />
        <FormatItalicIcon onClick={italic_} className="abcd6" />
        <FormatUnderlinedIcon onClick={underline_} className="abcd7" />
        <div className="hr2" />
        <p className="abcd8">Font Size: </p>
        <select className="abcd9" id="font_size" onClick={font_size_}>

        <option value="16px">
                       16px
        </option>
        <option value="2px">
                       2px
        </option>
        <option value="4px">
                       4px
        </option>
        <option value="8px">
                       8px
        </option>
        <option value="9px">
                       9px
        </option>
        <option value="10px">
                       10px
        </option>
        <option value="11px">
                       11px
        </option>
        <option value="12px">
                       12px
        </option>
        <option value="14px">
                       14px
        </option>
        <option value="16px">
                       16px
        </option>
        <option value="18px">
                       18px
        </option>
        <option value="20px">
                       20px
        </option>
        <option value="22px">
                       22px
        </option>
        <option value="24px">
                       24px
        </option>
        <option value="26px">
                       26px
        </option>
        <option value="28px">
                       28px
        </option>
        <option value="36px">
                       36px
        </option>
        <option value="48px">
                       48px
        </option>
        <option value="72px">
                       72px
        </option>
        
        </select>
        
    <textarea className="notes" onChange={changetext} id="box" autoFocus="" value={textinput} cols="51"></textarea>
    
        </div>
    )
}



