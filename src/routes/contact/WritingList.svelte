<script>
  export let data;

  // Sort the data based on date
  if (!data) {
    data.sort((a, b) => {
        if (a.YEAR < b.YEAR) {
            return 1;
        }
        if (a.YEAR > b.YEAR) {
            return -1;
        }
        return 0;
    });
  }

  let currentYear = '';
  function isCurrentYear(year) {
    let result = currentYear === year;
    currentYear = year;
    return result;
  }

  let toggle = true
  let visible = true;

  function toggleVissible() {
      visible = !visible
  }
</script>

<div class="grid gap-y-1">
  {#if !data}
    {#each data as item}
        {#if !isCurrentYear(item.YEAR)}
            <h2 class="heading2centered ma-2 mb-2">{item.YEAR}</h2>
        {/if}

        <div class="flex flex-col sm:flex-row sm:items-end">
          <div class="text-lg text-black">
            <a
              href={item.URL}
              class="inline-block -mx-3 px-3 py-0 hover:bg-neutral-300 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {item.TITLE}
            </a>
          </div>
          <!--
          <div class="sm:ml-auto mb-0 order-last text-neutral-500">
            {item.YEAR}
          </div>
          -->
        </div>
        <div class="leading-snug font-serif">
          {item.AUTHOR}
        </div>
        <div class="leading-snug font-serif text-xs">
          {item.BOOKTITLE}, {item.YEAR}
        </div>

        <div class="group mb-4">
         <span class="text-xs hover:bg-neutral-300 transition-colors" id="dropdown">[Abstract / Bibtex]</span>
         <div class=" hidden group-active:block  bg-white  w-auto">
           <div class="p-3 text-sm">
             {item.ABSTRACT}
           </div>
           <div class="p-3 text-sm">
             <div>@{item.type} &lcub;{item.key}&rcub;,</div>
             <div class='ml-4 text-sm'>title=&lcub;{item.TITLE}&rcub;,</div>
             <div class='ml-4 text-sm'>author=&lcub;{item.AUTHOR}&rcub;,</div>
             <div class='ml-4 text-sm'>booktitle=&lcub;{item.BOOKTITLE}&rcub;,</div>
             <div class='ml-4 text-sm'>year=&lcub;{item.YEAR}}&rcub;,</div>
             <div>&rcub;</div> 
           </div>
         </div> 
        </div>
    {/each}
  {/if}
</div>

<!--
//  {
//    key: 'brantley2015ldaexplore',
//    type: 'inproceedings',
//    TITLE: 'Ldaexplore: Visualizing topic models generated using latent dirichlet allocation',
//    AUTHOR: 'Ganesan, Ashwinkumar and Brantley, Kiante and Pan, Shimei and Chen, Jian',
//    BOOKTITLE: 'extvis Workshop - Intelligent User Interfaces (IUI)',
//    SHORTTITLE: 'extvis Workshop - Intelligent User Interfaces (IUI)',
//    YEAR: '2015',
//    ABSTRACT: 'We present LDAExplore, a tool to visualize topic distributions in a given document corpus that are generated using Topic Modeling methods. Latent Dirichlet Allocation (LDA) is one of the basic methods that is predominantly used to generate topics. One of the problems with methods like LDA is that users who apply them may not understand the topics that are generated. Also, users may find it difficult to search correlated topics and correlated documents. LDAExplore, tries to alleviate these problems by visualizing topic and word distributions generated from the document corpus and allowing the user to interact with them. The system is designed for users, who have minimal knowledge of LDA or Topic Modelling methods. To evaluate our design, we run a pilot study which uses the abstracts of 322 Information Visualization papers, where every abstract is considered a document. The topics generated are then explored by users. The results show that users are able to find correlated documents and group them based on topics that are similar.',
//    KEYWORDS: 'workshop'
//  },
//
//@inproceedings{brantley2024surprising,
//  title={A Surprising Failure? Multimodal LLMs and the NLVR Challenge},
//  author={Wu, Anne and Brantley, Kiant{\'e} and Artzi, Yoav},
//  booktitle=PREPRINT,
//  shorttitle=PREPRINT,
//  year={2024},
//  abstract={This study evaluates three state-of-the-art MLLMs -- GPT-4V, Gemini Pro, and the open-source model IDEFICS -- on the compositional natural language vision reasoning task NLVR. Given a human-written sentence paired with a synthetic image, this task requires the model to determine the truth value of the sentence with respect to the image. Despite the strong performance demonstrated by these models, we observe they perform poorly on NLVR, which was constructed to require compositional and spatial reasoning, and to be robust for semantic and systematic biases.},
//  keywords={preprint}
//}
//
-->
