import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function BreadcrumbsComp() {
  return (
    <div className="self-center">
      <Breadcrumbs aria-label="breadcrumbs">
        {['Temp', 'Temp'].map((item: string) => (
          <Link key={item} color="neutral" href="#basics">
            {item}
          </Link>
        ))}
        <Typography>You are here</Typography>
      </Breadcrumbs>
    </div>
  );
}
