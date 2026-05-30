export const metadata = {
  title: 'Privacy Policy — Velvari',
  robots: { index: false },
}

export default function Privacy() {
  return (
    <div className="privacy-page">
      <div className="privacy-wrap">
        <a href="/" className="privacy-back">← Velvari</a>

        <h1>Privacy Policy</h1>
        <p className="privacy-date">Ultimo aggiornamento: Maggio 2026</p>

        <section>
          <h2>1. Titolare del trattamento</h2>
          <p>Velvari (di seguito "noi" o "Velvari"), contattabile all'indirizzo: <a href="mailto:privacy@velvari.it">privacy@velvari.it</a></p>
        </section>

        <section>
          <h2>2. Dati raccolti</h2>
          <p>Raccogliamo esclusivamente l'indirizzo email che inserisci volontariamente nel modulo di iscrizione alla lista d'attesa.</p>
        </section>

        <section>
          <h2>3. Finalità del trattamento</h2>
          <p>Il tuo indirizzo email viene utilizzato unicamente per:</p>
          <ul>
            <li>Inviarti la notifica di lancio della piattaforma Velvari</li>
            <li>Comunicazioni relative al servizio per cui hai espresso interesse</li>
          </ul>
          <p>Non utilizziamo la tua email per marketing di terze parti né la vendiamo a nessuno.</p>
        </section>

        <section>
          <h2>4. Base giuridica</h2>
          <p>Il trattamento si basa sul tuo consenso esplicito (Art. 6(1)(a) GDPR), espresso al momento dell'iscrizione alla lista d'attesa.</p>
        </section>

        <section>
          <h2>5. Conservazione dei dati</h2>
          <p>I tuoi dati vengono conservati fino alla tua richiesta di cancellazione, o al massimo 24 mesi dall'iscrizione in caso di mancato lancio del servizio.</p>
        </section>

        <section>
          <h2>6. Diritti dell'interessato</h2>
          <p>Hai il diritto di:</p>
          <ul>
            <li>Accedere ai tuoi dati personali</li>
            <li>Richiedere la rettifica o cancellazione</li>
            <li>Opporti al trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
            <li>Revocare il consenso in qualsiasi momento</li>
          </ul>
          <p>Per esercitare questi diritti scrivi a: <a href="mailto:privacy@velvari.it">privacy@velvari.it</a></p>
        </section>

        <section>
          <h2>7. Trasferimento dati</h2>
          <p>I dati sono archiviati su Supabase (USA) con adeguate garanzie ai sensi del GDPR (Standard Contractual Clauses). Il sito è ospitato su Vercel Inc. (USA), anch'esso conforme GDPR.</p>
        </section>

        <section>
          <h2>8. Cookie</h2>
          <p>Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o analytics di terze parti.</p>
        </section>

        <section>
          <h2>9. Contatti</h2>
          <p>Per qualsiasi domanda: <a href="mailto:privacy@velvari.it">privacy@velvari.it</a></p>
        </section>
      </div>
    </div>
  )
}
