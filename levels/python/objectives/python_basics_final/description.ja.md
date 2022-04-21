<%
const pystate = levelState.pythonWorldState;
%>

# 複雑な単語パズル

<div style="font-size: 22px;border-bottom: 2px dashed;padding:10px 0;">
<b>パズルの現在ステータス:&nbsp;</b> 
<b style="color:<%= pystate.canSolvePuzzle ? 'green' : 'red' %>">
  <%= pystate.canSolvePuzzle ? 'Solvable' : 'Unsolvable - See Below' %>
</b>
<span style="height: 10px;display:block;"></span>
<b>見つかった手がかり:&nbsp;</b> 
<b>
  <%= pystate.cluesFound %> / <%= pystate.cluesTotal %>
</b>
</div>
<b>Pythonの古代都市</b>のにおいて、新しい市民は市民権を得る前に、複雑な単語パズルを解き、善良な市民であることを証明する必要がありました。証明すると、彼らのステータスを象徴する<b>Pythonの知識の杖</b>を得られました。このようなパズルの1つを次に紹介します。パズルを解き、古代の賞品を獲得してください。

## パズルの格子

<% if (pystate.cluesFound === 0) { %>

杖を収めた箱の近くに、風雨にさらされた石板がありました。石板には3x39マスの格子が刻まれています。各マスには何か書かれているように見えますが、年月を経ているため、文字の跡が消えています:

<% } else if (pystate.cluesFound > 0) { %>


杖を収めた箱の近くに、風雨にさらされた石板がありました。石板には3x39マスの格子が刻まれています。隣にある彫刻刀を使用し、部屋に漂うゴーストから判読した文字を丁寧に刻んでください。


<% } else { %>


杖を収めた箱の近くに、風雨にさらされた石板がありました。石板には3x39マスの格子が刻まれています。手がかりをすべて見つけました。隣にある彫刻刀を使用し、各マスに文字を掘ることができます。完成したパズルは次のようになります:


<% } %>


<style>
.puzzle-grid {
  background-color: #343434;
  background-image: linear-gradient(315deg, #343434 0%, #676767 74%);
}

.puzzle-grid td {
  width: 33%;
  border: 5px solid #aaaaaa;
  text-align: center;
  color: #eee;
  font-size: 42px !important;
  vertical-align: middle !important;
  height: 100px !important;
  font-family: Papyrus, "Times New Roman", serif;
}

.puzzle-grid tr {
  background-color: transparent !important;
}
</style>
<table class="puzzle-grid">
  <tr>
    <td>
      <%= pystate.clues['one'] ? 'R' : '???' %>
    </td>
    <td>
      <%= pystate.clues['two'] ? 'N' : '???' %>
    </td>
    <td>
      <%= pystate.clues['three'] ? 'O' : '???' %>
    </td>
  </tr>
  <tr>
    <td>
      <%= pystate.clues['four'] ? 'A' : '???' %>
    </td>
    <td>
      <%= pystate.clues['five'] ? 'J' : '???' %>
    </td>
    <td>
      <%= pystate.clues['six'] ? 'S' : '???' %>
    </td>
  </tr>
  <tr>
    <td>
      <%= pystate.clues['seven'] ? 'P' : '???' %>
    </td>
    <td>
      <%= pystate.clues['eight'] ? 'Y' : '???' %>
    </td>
    <td>
      <%= pystate.clues['nine'] ? 'F' : '???' %>
    </td>
  </tr>
</table>

<% if (pystate.canSolvePuzzle) { %>


## 複雑な単語パズルを解く

手がかりをすべて回収したところ、複雑な単語パズルの全貌が明らかになりました。これは[Boggle](https://en.wikipedia.org/wiki/Boggle)というゲームのような構成のようです。このパズルを解くには、文字(上、下、左、右、対角線)間の連続した線を辿り、<b>5文字からなる英単語を綴る</b>必要があります。

見つけた単語(複数の可能性もあり)を、右側のテキストフィールドに入力し、[*HACK*]をクリックします。


<% } %>


## パズルを再構成する

このパズルを解き明かすためのヒントは、イニシエーション儀式室をただようゴーストたちにあります。<b>この部屋にいるすべての霊を見つけて話しかけると、</b>このパズルを解くためのヒントの1つを教えてくれます。

このエリアの先に進むには、一連の試練に合格する必要があります。これらの試練は、初期のPythonistaたちがPython市の市民権を目指す中で受けたものと同じです。[Pythonプログラミング言語](https://www.python.org/)の基本原則を習得することにより、彼らの足跡を追い、イニシエーション儀式室の謎を解明できるようになるはずです。


<% if (pystate.canSolvePuzzle) { %>


手がかりをすべて回収したため、最後のパズルを解くことができます。テキストフィールドにパズルの解答(上記の格子の下に書かれています)を入力し、[*HACK*]をクリックして杖を獲得してください。


<% } else { %>


__手がかりを回収__すると、__上記のパズルは変わります__。__9個すべての手がかり__を回収した場合は、ここに戻り、パズルを解くことができます。


<% } %>
