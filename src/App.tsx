import React from 'react';
import { styled } from '@mui/material/styles';
import Item from "@mui/material/Grid";
import './App.css';
import 
{Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Container,createTheme, ThemeProvider
 } 
from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';

function App() {

  const [seat, setSeat] = React.useState('');
  const handleSeatChange = (event: SelectChangeEvent) => {
    setSeat(event.target.value as string);
  };


  const [branch, setBranch] = React.useState('');
  const handleBranchChange = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };

  const [team, setTeam] = React.useState('');
  const handleTeamChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
  };

  const [floor, setFloor] = React.useState('');
  const handleFloorChange = (event: SelectChangeEvent) => {
    setFloor(event.target.value as string);
  };

  const [rool, setRool] = React.useState('');
  const handleRoolChange = (event: SelectChangeEvent) => {
    setRool(event.target.value as string);
  };

  const CustomNavi = styled(Typography)(({ theme }) => ({
    variant:"body1",
    lineHeight:"4em",
    color:"#00AA00",
    fontWeight:"bold"
  }))

  const CustomSelectNavi = styled(Typography)(({ theme }) => ({
    variant:"body1",
    lineHeight:"4em",
    color:"#00AA00",
    fontWeight:"bold"
  }))

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00AA00',
      },
    },
  });

  return (
    <div >
      
 <Box sx={{ bgcolor: '#cfe8fc',height:"110vh"}} >
  <Typography variant="h5" sx={{fontWeight:"bold"}}>従業員情報  新規登録</Typography>
      <Container maxWidth="xl">
       <Box sx={{backgroundColor:"white",height:"90vh", marginTop:"100px"}}>
       <Grid container spacing={2}>
        <Grid item xs={7}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
          <Grid item xs={6} sx={{display:'flex'}}>
          <CustomNavi>姓（必須）</CustomNavi>
            <TextField 
            id="filled-basic" 
            label="あなたのお名前(姓)" 
            variant="filled" 
            margin="dense"
            sx={{marginLeft:2}}
            size="small"/>
          </Grid>
          
          <Grid item xs={6} sx={{display:'flex'}}>
          <CustomNavi>名（必須）</CustomNavi>
          <TextField 
            id="filled-basic" 
            label="あなたのお名前(名)" 
            variant="filled" 
            margin="dense"
            sx={{marginLeft:2}}
            size="small"/>
          </Grid>
          </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{display:'flex'}}>
          <CustomNavi>セイ（必須）</CustomNavi>
          <TextField 
         id="filled-basic" 
         label="あなたのお名前(セイ)" 
         variant="filled" 
         margin="dense"
         size="small"/>
          </Grid>
          
          
          <Grid item xs={6} sx={{display:'flex'}}>
          <CustomNavi>メイ（必須）</CustomNavi>
          <TextField 
         id="filled-basic" 
         label="あなたのお名前(メイ)" 
         variant="filled" 
         margin="dense"
         size="small"/>
          
          </Grid>
          </Grid>

          <Grid item xs={12} sx={{display:'flex'}}>
          <CustomNavi>メールアドレス（必須）</CustomNavi>
            <TextField
            id="filled-basic"
            label="メールアドレス"
            variant="filled"
            size="small"
            margin="dense"
            sx={{marginLeft:2,width:"46ch"}}
            />
            </Grid>

          <Grid item xs={12} sx={{display:'flex'}}>
          <CustomNavi>従業員ID（必須）</CustomNavi>
          <TextField
            id="ffilled-basic"
            label="従業員ID"
            variant="filled"
            size="small"
            margin="dense"
            sx={{marginLeft:8,width:"46ch"}}
          />
          </Grid>

          <Grid item xs={12} sx={{display:'flex'}}>
          <CustomNavi>社用電話番号</CustomNavi>
          <TextField
            id="filled-basic"
            label="例:08012345678"
            variant="filled"
            size="small"
            margin="dense"
            sx={{marginLeft:12,width:"46ch"}}
              />
          </Grid>

          <Grid container spacing={2} sx={{mt:1}}>  
          <Grid item xs={6} sx={{display:'flex'}}>
          <CustomSelectNavi>指定席</CustomSelectNavi>
          <FormControl variant="filled" sx={{ ml: 18, minWidth: 120}}>
          <InputLabel id="demo-simple-select-filled-label">指定席</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={seat}
            size="small"
            onChange={handleSeatChange}
          >
            <MenuItem value={10}>
            <em>あり</em>
            </MenuItem>
            <MenuItem value={20}>なし</MenuItem>
            </Select>
            </FormControl>
          </Grid>


          <Grid item xs={6} sx={{display:'flex'}}>
          <ThemeProvider theme={theme}>
          <Button variant="outlined" size="small">
          選択する
          </Button>
          </ThemeProvider>
          <Typography sx={{ml:2,lineHeight:3}}>ID:001</Typography>
          </Grid>
          </Grid>

          <FormGroup>
          <ThemeProvider theme={theme}>
          <FormControlLabel control={<Checkbox  />} sx={{mt:1}}label="フルリモート勤務の場合はチェックしてください" />
          </ThemeProvider>
          </FormGroup>
        </Container>
      </Grid>
      

        <Grid item xs={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
          <Grid item xs={12} sx={{display:'flex'}}>
          <CustomSelectNavi>拠点名（必須）</CustomSelectNavi>
          <FormControl variant="filled" sx={{ ml: 4, minWidth: 120 ,width:200}}>
          <InputLabel id="demo-simple-select-filled-label">拠点名</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={branch}
            size="small"
            onChange={handleBranchChange}
          >
            <MenuItem value="">
            <em>なし</em>
          </MenuItem>
          <MenuItem value={10}>東京支店</MenuItem>
          <MenuItem value={20}>大阪支店</MenuItem>
          <MenuItem value={30}>仙台支店</MenuItem>
         </Select>
        </FormControl>
      </Grid>
      
      <Grid item xs={12} sx={{display:'flex'}}>
      <CustomSelectNavi>部署名（必須）</CustomSelectNavi>
        <FormControl variant="filled" sx={{ ml: 4, minWidth: 120,width:200 }}>
        <InputLabel id="demo-simple-select-filled-label">部署名</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={team}
          size="small"
          onChange={handleTeamChange}
        >
          <MenuItem value="">
            <em>なし</em>
          </MenuItem>
          <MenuItem value={10}>営業部</MenuItem>
          <MenuItem value={20}>マーケティング部</MenuItem>
          <MenuItem value={30}>人事部</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={12} sx={{display:'flex'}}>
      <CustomSelectNavi>フロア名（必須）</CustomSelectNavi>
          <FormControl variant="filled" sx={{ ml: 2, minWidth: 120,width:200 }}>
        <InputLabel id="demo-simple-select-filled-label">フロア名</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={floor}
          size="small"
          onChange={handleFloorChange}
        >
          <MenuItem value="">
            <em>なし</em>
          </MenuItem>
          <MenuItem value={10}>1F</MenuItem>
          <MenuItem value={20}>2F</MenuItem>
          <MenuItem value={30}>3F</MenuItem>
        </Select>
      </FormControl>
      </Grid>


      <Grid item xs={12} sx={{display:'flex'}}>
      <CustomSelectNavi>権限（必須）</CustomSelectNavi>
        <FormControl variant="filled" sx={{ ml: 6, minWidth: 120,width:200 }}>
        <InputLabel id="demo-simple-select-filled-label">権限</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={rool}
          size="small"
          onChange={handleRoolChange}
        >
          <MenuItem value="">
            <em>なし</em>
          </MenuItem>
          <MenuItem value={10}>法人管理者</MenuItem>
          <MenuItem value={20}>拠点管理者</MenuItem>
          <MenuItem value={30}>所属長</MenuItem>
          <MenuItem value={40}>一般社員</MenuItem>
        </Select>
      </FormControl>
      </Grid>


      <Typography sx={{m:2,color:"#00AA00",fontWeight:"bold"}}>備考</Typography>
      <TextField
          id="filled-multiline-static"
          multiline
          rows={5}
          placeholder="最大文字数1000文字" 
          variant="filled"
          sx={{width:"50ch"}}
        />
          </Grid>
      </Container>
       </Grid>
       </Grid>
      
      <Box sx={{m:3,textAlign:"center"}}>
      <ThemeProvider theme={theme}>
      <Button variant="outlined" size="large" color="primary" sx={{m:2,width:"200px"}}>
            戻る
          </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
      <Button variant="contained" size="large" color="primary" sx={{m:2,width:"200px"}}>
          登録
        </Button>
        </ThemeProvider>
        </Box>
      </Box>
      </Container>
      </Box>
      </div>  

    
  );
}

export default App;
