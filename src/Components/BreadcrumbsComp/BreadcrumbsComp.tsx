import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Typography from '@mui/joy/Typography';

const BreadcrumbsComp = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((x) => x && isNaN(Number(x)));

  return (
    <div className="self-center">
      <Breadcrumbs
        aria-label="breadcrumbs"
        sx={{
          color: '#ffffffc0',
          padding: '0',
          margin: '0.5rem',
          fontSize: '0.9rem',
        }}
      >
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <Typography key={pathname}>
              {isLast ? (
                <div className="cursor-default font-bold text-white">
                  {pathname}
                </div>
              ) : (
                <Link to={routeTo} className="text-txtdark">
                  {pathname}
                </Link>
              )}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComp;
