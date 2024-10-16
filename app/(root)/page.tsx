import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedin = {firstName: 'João'}

  return (
    <div className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox subtext="Access and manage your account and transactions efficiently" type="greeting" title="Welcome" user={loggedin?.firstName || 'Guest'} />

          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250} />
        </header>
      </div>
    </div>
  )
}