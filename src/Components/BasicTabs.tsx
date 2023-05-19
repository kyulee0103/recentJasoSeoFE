import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import AnswerBox from './AnswerBox'
import {useRecoilState} from 'recoil'
import {helperState} from '../recoil/helper'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 4, paddingLeft: '0px', paddingRight: '68px', marginTop: '40px'}}>{children}</Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}
const theme = createTheme({
    palette: {
        primary: {
            main: '#9180FC',
        },
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    '&$selected': {
                        fontWeight: 700,
                    },
                    paddingBottom: 3, // 버튼의 paddingBottom 값을 5로 설정
                },
                textColorPrimary: {
                    '&$selected': {
                        color: '#8F98A9',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    height: 4,
                    backgroundColor: '#9180FC',
                },
            },
        },
    },
})
export default function BasicTabs() {
    const [helperData, setHelperData] = useRecoilState(helperState)
    const storedValue = localStorage.getItem('page')
    const initialValue = storedValue !== null ? parseInt(storedValue) : 0
    const [value, setValue] = React.useState(initialValue)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
        setHelperData({
            id: newValue,
        })
        localStorage.setItem('page', newValue.toString())
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 0, borderColor: 'divider'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="basic tabs example"
                    >
                        <Tab
                            label={
                                <Typography
                                    sx={{
                                        px: 1,
                                        fontSize: '25px',
                                        color: value === 0 ? '#9180FC' : '#8F98A9',
                                        fontWeight: value === 0 ? 700 : 500,
                                    }}
                                >
                                    초안 작성
                                </Typography>
                            }
                            {...a11yProps(0)}
                        />
                        <Tab
                            label={
                                <Typography
                                    sx={{
                                        px: 1,
                                        fontSize: '25px',
                                        color: value === 1 ? '#9180FC' : '#8F98A9',
                                        fontWeight: value === 1 ? 700 : 500,
                                    }}
                                >
                                    내용 수정
                                </Typography>
                            }
                            {...a11yProps(1)}
                        />
                        <Tab
                            label={
                                <Typography
                                    sx={{
                                        px: 1,
                                        fontSize: '25px',
                                        color: value === 2 ? '#9180FC' : '#8F98A9',
                                        fontWeight: value === 2 ? 700 : 500,
                                    }}
                                >
                                    문장 가독성
                                </Typography>
                            }
                            {...a11yProps(2)}
                        />
                        <Tab
                            label={
                                <Typography
                                    sx={{
                                        px: 1,
                                        fontSize: '25px',
                                        color: value === 3 ? '#9180FC' : '#8F98A9',
                                        fontWeight: value === 3 ? 700 : 500,
                                    }}
                                >
                                    예상 질문
                                </Typography>
                            }
                            {...a11yProps(3)}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {value === 0 && <AnswerBox id={helperData.id} />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {value === 1 && <AnswerBox id={helperData.id} />}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {value === 2 && <AnswerBox id={helperData.id} />}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {value === 3 && <AnswerBox id={helperData.id} />}
                </TabPanel>
            </Box>
        </ThemeProvider>
    )
}
