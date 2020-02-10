import React from 'react';
import {PageContainer, PageWrap} from '../../../styled-compoments/PanelStyle';
import { PanelBanner, ParaPanel, Quote, PanelTitle, Crumbs, CrumbLeft, CrumbRight} from '../../../styled-compoments/PanelContentStyles';
import { Icon } from 'semantic-ui-react'
import IntroHero from "../../../components/images/panels/intro/intro-hero.jpg";
import Slide from 'react-reveal/Slide'; 

const Panel0Introductions = () => (
  <>
  <PageContainer>
    <PageWrap>
    <PanelBanner style={{ background: `url(${IntroHero})` }}/>
    <Slide bottom>

  <PanelTitle>Introduction</PanelTitle>
<ParaPanel>

<p>Italian immigration to the West Coast, which began as early as the Gold Rush, reached full force around the turn of the century. By the 1930s, the Italian population was at its peak: Italian Americans comprised the largest immigrant group not only in San Francisco, but in the entire United States. The thirties were not easy for these immigrants, either politically or economically. The Great Depression caused financial hardship for most. In addition, Italy under Mussolini was split between those who favored Il Duce&rsquo;s totalitarian policies, and those who opposed them. Fascists battled anti-fascists both under and above-ground. The battle crossed the ocean with the many anti-fascists who fled to exile in America.</p>

<Quote>
Don’t speak the enemy’s language. Speak American!
</Quote>

<p>Italian communities like those in North Beach engaged in these disputes, not least in their newspapers. For the most part, however, the immigrant generation supported Mussolini. He seemed to have gained the world&rsquo;s respect for Italy by turning the old country into a disciplined modern nation. Much of the world press, including the major organs in the United States, portrayed him as a hero&mdash;the first modern leader to lift his nation out of post-World War I chaos and Depression.</p>

<p>In 1935, with his invasion of Ethiopia, the portrait began to change. The League of Nations imposed economic sanctions on Italy. Many Italian Americans, following the lead of their Italian language press, saw this as a betrayal and continued to support the country where so many had relatives in the service. Some donated to the Italian Red Cross, while thousands of others sent gold wedding rings and copper postcards to support the Italian war effort. When Italy allied with Germany and joined in the attack on France in 1940, however, the immigrants&rsquo; worst fears were realized. Their American sons might soon have to make war on their Italian relatives.</p>

<p>With the Japanese attack on Pearl Harbor in 1941 and the U.S. declaration of war on all three Axis powers, Italian Americans, and the formerly pro-fascist newspapers, hastened to affirm their loyalty to their adopted country. It made little difference. The measures to come made many immigrants feel that they were being blamed for where they had been born.</p>

<p><span className='italic'>Una Storia Segreta</span> documents some of what happened in the days following Pearl Harbor: the internment of &ldquo;dangerous&rdquo; aliens beginning on the night of December 7; the re-registration of all enemy aliens and restrictions on their possessions and movements; the evacuation of thousands of aliens from &ldquo;prohibited zones&rdquo; on the West Coast; and the enforcement, again on the West Coast, of a stringent 8PM to 6AM curfew. Failure to comply with any element could, and often did, lead to arrest and detention.</p>

<p>Subsequent months (February through June 1942) were a time of fear and confusion. Rumors and newspaper articles reported that what all Californians were witnessing&mdash;the mass internment of Japanese Americans, both citizens and aliens alike&mdash;was being considered in some form for Italian and German Americans as well. Executive Order 9066 had made it possible to remove anyone, and General DeWitt, the head of the Western Defense Command, as well as generals in other commands, seemed eager to use it. No one knew what might happen, or when.</p>

<p>By June, political and economic considerations caused all such plans to be abandoned. In October 1942, Italian immigrants were formally removed from the enemy alien classification, and the evacuees were allowed to return to prohibited zones. The ordeal was not complete, however. Ironically, this was the very time dozens of naturalized citizens whom the Tenney Committee had found &ldquo;dangerous&rdquo; received exclusion orders: all such &lsquo;excludees&rsquo; were ordered to move from Military Zones 1 and 2, which covered most of the West, and eastern areas as well. Thus, even though most Italian aliens were no longer in the &lsquo;enemy alien&rsquo; category, those interned in December 1941 and the recently-excluded citizens remained in that category until the Fall of 1943, when Italy&rsquo;s fascist government surrendered.</p>

<p>Despite the years of research that went into it, <span className='italic'>Una Storia Segreta</span> makes no claim to be complete: some government documents are still classified, and requests for data under the Freedom of Information Act can wait years for a response.</p>

<p>Still, we believe that what is known must be told now, primarily so that similar episodes might be prevented in the future. In addition, no one who has spoken to those affected can fail to be moved by the impact these measures had on them, their families, and their communities. Neither can one avoid the questions that arise. To what degree, for example, did the targeting of those whose first language was Italian hasten the disuse of the Italian language? Aside from much anecdotal evidence, no studies exist to provide figures. We do know, however, that many immigrants, clubs and stores made a point of not using Italian in public, while others stopped teaching the language to their children. The U.S. Government surely encouraged this trend by its poster proclaiming &ldquo;DON&rsquo;T SPEAK THE ENEMY&rsquo;S LANGUAGE. SPEAK AMERICAN!&rdquo;</p>

<p>Much more might and surely will be said about these and other long-lasting effects. For now, we think it appropriate to give the last words to Frances Cardinalli of Pittsburg, whose aging parents had to evacuate their home in Pittsburg and move to Centerville, near Fremont. Referring to a photo of her mother in her Sunday best, we asked if that was how her mother looked on the day she had to leave.</p>

<p>&ldquo;Oh God, no. It looked like a funeral. We were all dead. We couldn&rsquo;t part. We never were separated before.&rdquo;</p>

<p>If immigration itself constitutes a little death, then the wartime for many Italian immigrants, and their communities, may come to be seen as yet another.</p>

<Crumbs>
  <CrumbLeft
  href='/anniversary'
  >
  <Icon name='angle left' /> 
  Anniversary
  </CrumbLeft>

  <CrumbRight
  href='/prelude'
  >
  Next
	<Icon name='angle right' /> 
  </CrumbRight>
</Crumbs>

</ParaPanel>
    </Slide>
</PageWrap>
</PageContainer>
  </>
)

export default Panel0Introductions;