import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
export default function SignupLogin() {
  return (
    <div className="fixed top-[6.5rem] right-2 p-5 max-w-[20%] border-bordercol border-[1px] rounded-lg text-center">
      <Tabs
        aria-label="Basic tabs"
        defaultValue={0}
        className="rounded-b-lg"
        sx={{
          backgroundColor: '#060606'
        }}
      >
        <TabList tabFlex={1}>
          <Tab
            variant="plain"
            sx={{
              color: '#8E8E8E',
              '&.Mui-selected': {
                color: 'white',
                background: '#060606'
              },
              '&:not(.Mui-selected):hover': {
                color: 'white',
                background: '#060606'
              }
            }}
          >
            <b>Login</b>
          </Tab>
          <Tab
            variant="plain"
            sx={{
              color: '#8E8E8E',
              '&.Mui-selected': { color: 'white', background: '#060606' },
              '&:not(.Mui-selected):hover': {
                color: 'white',
                background: '#060606'
              }
            }}
          >
            <b>Sign up</b>
          </Tab>
        </TabList>
        <TabPanel value={0}>
          <input
            type="text"
            placeholder="Email"
            className="text-txtbright bg-bgcol border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-txtbright bg-bgcol border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
          />
          <button className="flex justify-center items-center mx-auto mt-6 text-txtbright bg-bgcol border-bordercol border-[1px] rounded-lg w-[90%] h-12 p-4 text-sm">
            Login
          </button>
          <p className="mt-6 mb-2 text-txtdark text-sm">
            Don't have an account?{' '}
            <span className="text-txtbright cursor-pointer">Signup</span>
          </p>
        </TabPanel>
        <TabPanel value={1}>
          <input
            type="text"
            placeholder="Email"
            className="text-txtbright bg-bgcol border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="text-txtbright bg-bgcol border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="text-txtbright bg-bgcol border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
          />
          <div>
            <p className="mt-4 mb-6 mx-[20%] text-txtdark hover:text-txtbright cursor-pointer text-sm">
              Forgot password?
            </p>
          </div>
          <button className="flex justify-center items-center mx-auto mt-2 text-txtbright bg-bgcol border-bordercol border-[1px] rounded-lg w-[90%] h-12 p-4 text-sm">
            Signup
          </button>
          <p className="mt-6 mb-2 text-txtdark text-sm">
            Already have an account?{' '}
            <span className="text-txtbright cursor-pointer">Login</span>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}
