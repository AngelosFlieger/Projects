import { ScreenCommunication3Service } from './screen-communication3.service';
import { ScreenCommunication2Service } from './screen-communication2.service';
import { ScreenCommunicationService } from './screen-communication.service'; // Adjust the path
import { votingSocketService } from './votingsocket.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { _1MainScreenComponent } from './components/1-main-screen/1-main-screen.component';
import { ButtonComponent } from './button/button.component'; 
import { LobbytableComponent } from './lobbytable/lobbytable.component';
import { Page7Component } from './page7/page7.component';
import { Page6Component } from './page6/page6.component';
import { Page5Component } from './page5/page5.component';
import { Page4Component } from './page4/page4.component';
import { Page3Component } from './page3/page3.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { Lobby1Component } from './lobby1/lobby1.component';
import { JoinlobbyService } from './joinlobby.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { RandompickComponent } from './randompick/randompick.component';
import { PlayerperformingComponent } from './playerperforming/playerperforming.component';
import { VotingComponent } from './voting/voting.component';
import { LobbyWaitingToStartComponent } from './lobby-waiting-to-start/lobby-waiting-to-start.component';
import { KaraokeLyricsComponent } from './karaoke-lyrics/karaoke-lyrics.component';
import { VoteResultsComponent } from './vote-results/vote-results.component';
import { IsUpNextComponent } from './is-up-next/is-up-next.component';
import { ResultsComponent } from './results/results.component';
import { Player2Component } from './player2/player2.component';
import { Player2page2Component } from './player2page2/player2page2.component';
import { LoadingComponent } from './loading/loading.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { MargotUpNextComponent } from './margot-up-next/margot-up-next.component';
import { MargotperformingComponent } from './margotperforming/margotperforming.component';
import { MargotvoteresultsComponent } from './margotvoteresults/margotvoteresults.component';
import { MargotkaraokeComponent } from './margotkaraoke/margotkaraoke.component';
import { Player3Component } from './player3/player3.component';
import { Player3page2Component } from './player3page2/player3page2.component';
import { MamalakisUpNextComponent } from './mamalakis-up-next/mamalakis-up-next.component';
import { MamalakiskaraokeComponent } from './mamalakiskaraoke/mamalakiskaraoke.component';
import { MamalakisvoteresultsComponent } from './mamalakisvoteresults/mamalakisvoteresults.component';
import { MamalakisperformingComponent } from './mamalakisperforming/mamalakisperforming.component';
import { Player2page7Component } from './player2page7/player2page7.component';
import { Player2randompickComponent } from './player2randompick/player2randompick.component';
import { Loading2Component } from './loading2/loading2.component';
import { Player3page7Component } from './player3page7/player3page7.component';
import { Player3randompickComponent } from './player3randompick/player3randompick.component';
import { Playersrating1Component } from './playersrating1/playersrating1.component';
import { Playersrating2Component } from './playersrating2/playersrating2.component';
import { Playersrating3Component } from './playersrating3/playersrating3.component';
import { Playerperforming2Component } from './playerperforming2/playerperforming2.component';
const config: SocketIoConfig = { url: 'http://139.91.80.157:3000', options: {} };
const routes: Routes = [
  { path: 'playerperforming2', component: Playerperforming2Component },
  { path: 'playersrating1', component: Playersrating1Component },
  { path: 'playersrating2', component: Playersrating2Component },
  { path: 'playersrating3', component: Playersrating3Component },
  { path: 'player3randompick', component: Player3randompickComponent },
  { path: 'player3page7', component: Player3page7Component },
  { path: 'loading2', component: Loading2Component },
  { path: 'player2randompick', component: Player2randompickComponent },
  { path: 'player2page7', component: Player2page7Component },
  { path: 'mamalakisperforming', component: MamalakisperformingComponent },
  { path: 'mamalakisvoteresults', component: MamalakisvoteresultsComponent },
  { path: 'mamalakiskaraoke', component: MamalakiskaraokeComponent },
  { path: 'mamalakis-up-next', component: MamalakisUpNextComponent },
  { path: 'player3page2', component: Player3page2Component },
  { path: 'player3', component: Player3Component },
  { path: 'margotkaraoke', component: MargotkaraokeComponent },
  { path: 'margotvoteresults', component: MargotvoteresultsComponent },
  { path: 'margotperforming', component: MargotperformingComponent },
  { path: 'margot-up-next', component: MargotUpNextComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'player2page2', component: Player2page2Component },
  { path: 'player2', component: Player2Component },
  { path: '', redirectTo: '/voting', pathMatch: 'full' },
  { path: 'results', component: ResultsComponent },
  { path: 'is-up-next', component: IsUpNextComponent },
  { path: 'vote-results', component: VoteResultsComponent },
  { path: 'karaoke-lyrics', component: KaraokeLyricsComponent },
  { path: 'lobby-waiting-to-start', component: LobbyWaitingToStartComponent },
  { path: 'voting', component: VotingComponent },
  { path: 'playerperforming', component: PlayerperformingComponent },
  { path: 'randompick', component: RandompickComponent },
  { path: 'lobbytable', component: LobbytableComponent },
  { path: 'page7', component: Page7Component },
  { path: 'page6', component: Page6Component },
  { path: 'page5', component: Page5Component },
  { path: 'page4', component: Page4Component },
  { path: 'page3', component: Page3Component },
  { path: 'page2', component: Page2Component },
  { path: 'host', component: Page1Component },
  { path: 'lobby1', component: Lobby1Component },
  // Add other routes as needed
];

@NgModule({
  declarations: [AppComponent, _1MainScreenComponent,  ButtonComponent, RandompickComponent, PlayerperformingComponent, VotingComponent, LobbyWaitingToStartComponent, KaraokeLyricsComponent, VoteResultsComponent, IsUpNextComponent, ResultsComponent, Player2Component, Player2page2Component, LoadingComponent, LeadershipComponent, MargotUpNextComponent, MargotperformingComponent, MargotvoteresultsComponent, MargotkaraokeComponent, Player3Component, Player3page2Component, MamalakisUpNextComponent, MamalakiskaraokeComponent, MamalakisvoteresultsComponent, MamalakisperformingComponent, Player2page7Component, Player2randompickComponent, Loading2Component, Player3page7Component, Player3randompickComponent, Playersrating1Component, Playersrating2Component, Playersrating3Component, Playerperforming2Component],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
  ],
  providers: [JoinlobbyService, votingSocketService, ScreenCommunicationService, ScreenCommunication2Service, ScreenCommunication3Service],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
