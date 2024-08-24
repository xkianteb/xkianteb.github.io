<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { setContext } from 'svelte'
  import type { PageData } from './$types'
 
  import PublicationList from "./PublicationList.svelte";
  import TalkList from "./TalkList.svelte";
  import Contact from "./Contact.svelte";

  import bibtexParse from 'bibtex-parse'

  export let data: PageData

  const bibPubArr = bibtexParse.entries(data.bibtex)
  const bibTalkArr = bibtexParse.entries(data.talks)

  export const dataFilter = 'recent';
</script>

<Seo
  title="Kiant&eacute; Brantley"
  description=""
/>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<section class="layout-md mb-5">
  <h2 class="heading2">Research:</h2>
  I'm an Assistant Professor of Computer Science at Harvard SEAS where I lead the Data-Centric Machine Learning (DCML) group. I'm also an Associate Faculty at the Kempner Institute, and have affiliations with the Center for Research on Computation and Society and the Harvard Data Science Initiative. I am also a researcher at Microsoft Research New England.
   <br><br>

  A professor named Hal Daumé III (he/him). He wields appointments in Computer Science where he is a Volpi-Cupal Professor, as well as Language Science at UMD where he leads the TRAILS, the Institute for Trustworthy AI in Law & Society (in Spring 2024 he's teaching a gen-ed course You and I, and Generative AI; past: Trustworthy ML (F23), AI (S23), Human-AI Interaction (F22), Just ML (F21)); he is also a Senior Principal Researcher the machine learning and fairness groups at Microsoft Research NYC. He and his wonderful advisees like to study questions related to how to get machines to becomes more adept at human language (and artificial intelligence tasks more broadly), by developing models and algorithms that allow them to learn from data. (Keywords: natural language processing and machine learning.) The two major questions that really drive their research these days are:

      (1) how can we get computers to learn
              through natural interaction with people/users?

              and (2) how can we do this in a way that minimize harms
                      in the learned models?
  <br><br>
  Kianté Brantley is a Postdoctoral scholar at Cornell working with Thorsten Joachims. He completed his Ph.D. in computer science at the University of Maryland College Park (UMD) advised by Professor Hal Daumé III. Brantley designs algorithms that efficiently integrate domain knowledge into sequential decision-making problems. He is most excited about imitation learning and interactive learning—or, more broadly, settings that involve a feedback loop between a machine learning agent and the input the machine learning agent sees.

  Before coming to UMD in 2016, Brantley attended the University of Maryland, Baltimore County where he earned his bachelor’s degree and master's degree (advised by Tim Oates) in computer science. He also worked as a data scientist for the U.S. Department of Defense from 2010 to 2017. In his free time, Brantley enjoys playing sports; his favorite sport at the moment is powerlifting.

</section>

<section class="layout-md mb-5">
  <h2 class="heading2">Prospective Students:</h2>
  some text
</section>


<section class="layout-md mb-5">
  <h2 class="heading2">Recent Publications:</h2>
   <PublicationList data={bibPubArr} dataFilter={dataFilter}/>
</section>

<section class="layout-md">
  <h2 class="heading2">Recent Talks:</h2>
   <TalkList data={bibTalkArr} dataFilter={dataFilter}/>
</section>
