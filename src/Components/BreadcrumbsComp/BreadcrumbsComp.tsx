import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function BreadcrumbsComp() {
  return (
    <div className="self-center">
      <Breadcrumbs
        aria-label="breadcrumbs"
        sx={{
          color: '#ffffffc0',
          padding: '0',
          margin: '0.5rem',
          fontSize: '0.9rem'
        }}
      >
        {['temp', 'temp'].map((item: string) => (
          <Link
            key={item}
            href="#basics"
            sx={{
              color: '#ffffff66',
              padding: '2px',
              marginX: '5px',
              '&:hover': {
                color: '#ffffff !important',
                borderRadius: '8px',
                padding: '2px',
                backgroundColor: '#ffffff00 !important',
                textDecoration: 'none'
              }
            }}
          >
            {item}
          </Link>
        ))}
        <Typography>
          <div className="cursor-default">current</div>
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
