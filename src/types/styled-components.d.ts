declare module './components/BasicTitle' {
  import { FC } from 'react';

  const BasicTitle: FC<{ children: React.ReactNode }>;
  export default BasicTitle;
}

declare module './components/DefaultButton' {
  import { FC } from 'react';

  const DefaultButton: FC<{ onClick: () => void }>;
  export default DefaultButton;
}
