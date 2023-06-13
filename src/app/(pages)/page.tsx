import { RQueryWrapper } from '@/hooks';
import Main from '@/main/Main';

export default function Home() {
  return (
    <main>
      <RQueryWrapper>
        <Main />
      </RQueryWrapper>
    </main>
  );
}
