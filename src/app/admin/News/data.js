const data = [{"title":"v2.0.1をリリースしました。","date":"2020-12-22","markdown":"## v2.0.1 (2020/12/22)\n\n- 管理系\n  - LINE公式アカウントとInstagramを登録できるようになりました。\n  - メニューに、管理画面からのみ見えるメモ機能を追加しました。\n  - 注文時にお客様からメッセージを受け取れるようになしました。\n- ユーザー系\n  - 注文完了後のページにお店のLINE公式アカウントが表示されるようになりました。\n  - 注文時にお店にメッセージを遅れるようになりました。"},{"title":"v2.0.0をリリースしました。","date":"2020-12-18","markdown":"## v2.0.0 (2020/12/18)\n\n- 管理系\n  - オプションに「ー」の文字を入れると文字化けする問題を修正しました。\n  - マニュアルを更新して、PDFにしました。\n  - PDFのチラシを作成する機能を追加しました。\n  - メニュー一覧画面で、公開している商品だけを表示可能にしました\n  - UIの改善\n- ユーザー系\n  - TOPページをリニューアルしました\n  - 同一のメニューをオプションを変えて注文できるようになりました。\n"},{"title":"v1.0.18をリリースしました。","date":"2020-12-03","markdown":"## v1.0.18 (2020/12/03)\n\n- 管理系\n  - 未ログイン時にオーダーページを開いた時に404になっていたのをログインページを表示するように変更しました\n  - 営業時間のコピーの文言を変更しました\n- ユーザー系\n  - metaタグの改善をしました\n\n "},{"title":"v1.0.17をリリースしました。","date":"2020-11-27","markdown":"## v1.0.17 (2020/11/27)\n\n- 管理系\n  - 臨時休業の設定を追加\n  - お知らせメールの設定を追加\n  - メニュー一覧で非公開のメニューがわかるようにしました\n- ユーザー系\n  - ロゴを変更しました\n  - 臨時休業の日は、注文を受付ないように変更\n "},{"title":"v1.0.16をリリースしました。","date":"2020-11-05","markdown":"## v1.0.16 (2020/11/05)\n\n- 管理系\n  - プライバシー重視モードを追加\n\n"},{"title":"v1.0.15をリリースしました。","date":"2020-10-07","markdown":"## v1.0.15 (2020/10/07)\n\n- 管理系\n  - 注文の状態「調理済み」を「受け渡し準備完了」に変更しました。\n  - LINE通知の設定へのリンクをTOPページに追加しました。\n- ユーザー系\n  -  注文の状態「調理済み」を「受け渡し準備完了」に変更しました。\n  -  飲食店エリアを更新しました\n"},{"title":"v1.0.14をリリースしました。","date":"2020-08-28","markdown":"## v1.0.14 (2020/08/28)\n\n- 管理系\n  - 注文履歴および月次報告の注文詳細ファイル（CVS）に、いくつかフィールドを追加し、注文合計および合計金額を計算するようにしました\n  - 注文済みの時間が表示されないケースがあったので修正しました\n- システム\n  - OwnPlateのライセンスファイルを追加しました(MIT)\n"},{"title":"v1.0.13をリリースしました。","date":"2020-08-21","markdown":"## v1.0.13 (2020/08/21)\n\n- 管理系\n - 注文の履歴をCSVでダウンロードできるようになりました。\n - CSVダウンロード時に商品を仕分けできるように\n"},{"title":"v1.0.12をリリースしました。","date":"2020-08-18","markdown":"## v1.0.12 (2020/08/18)\n\n- 管理系\n  - 前日受付が３週間前から可能になりました。\n  - オーダー確認画面の「注文済み」の時間をお客様が注文した時間に変更しました。\n  - 電話通知の設定が保存されない問題の修正\n  - 飲食店TOPページに電話通知の状態を表示しました\n- ユーザー系\n"},{"title":"v1.0.11をリリースしました。","date":"2020-08-10","markdown":"## v1.0.11 (2020/08/10)\n\n- 管理系\n  - オーダーの全履歴を見ることが出来るようにしました\n  - 受け渡し準備期間を最大５日まで設定できるようにしました\n  - 月次報告をCSV形式でダウンロード出来るようにしました\n  - 注文が入った時に、お店に電話をかけてお知らせできるようになりました。\n"},{"title":"v1.0.10をリリースしました。","date":"2020-08-03","markdown":"## v1.0.10 (2020/08/03)\n\n- 管理系\n  - オーダー情報画面にオーダーの明細（ユーザーが見ているものと同じもの）を表示するようにしました。\n  - オーダー情報画面のステータス（「注文済み」など）に時刻を表示するようにしました。\n  - キャンセルされたオーダーに関しては、オーダー情報画面に誰がキャンセルしたかを時刻とともに明示するようにしました。\n"},{"title":"v1.0.8をリリースしました。","date":"2020-07-20","markdown":"\n- 管理系\n  - 指定した時間まで受付を一時休止できるようにしました\n- ユーザー系\n  - レストランをお気に入りに追加出来るようにしました\n"},{"title":"v1.0.7をリリースしました。","date":"2020-07-13","markdown":"\n- 管理系\n  - 注文一覧と注文詳細ページに心づけの金額を表示するようにしました。\n  - お支払い方法が未設定の時に表示される警告メッセージの位置を変更しました。\n  - メニューの登録が 0 個の場合に警告メッセージを表示するようにしました。\n  - 月次報告のデザインをアップデートしました。\n- ユーザー系\n  - ヘッダーのタイトルにお店の名前を入れるようにしました。ブックマークしても迷子になりません。\n  - おもちかえり.com 上でオーダーができないお店は、お会計に進めないようにしました。\n  - 最短注文可能時間の表示を追加しました。\n"},{"title":"v1.0.6をリリースしました。","date":"2020-07-08","markdown":"- 管理系\n  - 有料オプションを可能にしました。「大盛り(+100)」とすると、100 円で大盛りオプションを提供出来ます。\n  - 二択、三択の場合も同様に可能です。「例：鶏肉,豚肉(+50),牛肉（+100)」\n  - 飲食店向けユーザーグループページへのリンクをトップに追加しました。\n  - 受け取り払いに関する注意書きをトップに追加しました。受け取り払いの場合、突然のキャンセルや悪戯などによる代金の未回収にご注意ください。\n  - お支払い方法（オンライン支払い/受け取り払い）が未設定の時に警告メッセージを表示するようにしました。\n  - Safari のプライベートブラウズモードを使用していると LINE 連携ができない旨のメッセージを LINE 連携の設定ページに追加しました。\n  - 店情報の編集画面でプロフィール画像（必須）が設定されていない場合に赤枠を表示するようにしました。\n\n"},{"title":"v1.0.5をリリースしました。","date":"2020-07-03","markdown":"- 管理系\n  - 「受け取り払い」の設定をわかりやすくしました。「受け取り払い」とは、オンライン決済を使わないで、店舗でお支払いするための設定です。\n  - 売上の月次報告を参照できるようになりました。\n  - 料理の金額に小数を設定できる問題を修正しました。\n- ユーザー系\n  - 営業時間のAM/PMの表現を日本語化しました。  \n"},{"title":"v1.0.4をリリースしました。","date":"2020-06-30","markdown":"- 管理系\n  - 内税の場合には、税金を含んだ値段をお店が入力するように変更しました。\n  - 「受け渡し準備時間」を最大で24時間に設定可能に変更しました。\n- ユーザー系\n  - 内税の場合のオーダーの表示の仕方を少し変えました。\n  - メニューにシェアボタンを追加しました\n  \n"},{"title":"v1.0.3をリリースしました。","date":"2020-06-29","markdown":"- 管理系\n  - iPhone/iPadでサウンドがオンになっている場合、お店のページを直接開いた時に確認のダイアログを表示するようにしました。\n  - 通知が届いた時に、サウンド共に、ヘッダーが点滅するようになりました。\n- ユーザー系\n  - メニューのSNSシェアに対応しました。シェアページにメニューの情報がでます。リンク先はお店のページです。\n  - JCBカードが使えない店舗の場合、「この店では、JCBカードが使えません」と明記するようにしました。\n  - SNSのシェア時のハッシュタグを変更しました。\n"},{"title":"v1.0.2をリリースしました。","date":"2020-06-26","markdown":"- 管理系\n  - 飲食店が非公開時に、オーナーだけユーザ向けのページが見れるようにpreview機能を追加しました。\n  - プロフィール画面でログアウトした時に発生するバグを修正しました。\n\n\n"},{"title":"v1.0.1をリリースしました。","date":"2020-06-23","markdown":"- 管理系\n  - 利用規約とプライバシーポリシーを追加しました。\n  - ストライプとの接続の不具合を修正しました。また、接続に失敗した場合にはエラーを表示するようにしました。 \n- ユーザー系\n  - 利用規約とプライバシーポリシーを追加しました。\n  - ログインせずにプロフィールページを開くとエラーになるバグを修正しました\n\n"},{"title":"v1.0.0をリリースしました。","date":"2020-06-22","markdown":"- 管理系\n  - 前日の営業時間の設定をコピーできるようにしました。\n  - 注文の通知設定ボタンに、未完了の注文数を追加したのと、通知設定画面で、日毎の注文数一覧を追加しました\n  - 通知音の種類を増やしました \n  - 各ページのヘッダーにオーダー情報を表示するようにしました\n- ユーザー系\n  - 保存したクレジットカード情報をプロフィール画面で確認し、そこで削除も出来るようにしました。\n  - 心付けの上限を設けました\n"},{"title":"v0.5.6をリリースしました。","date":"2020-06-17","markdown":"- 管理系\n  - ユーザーからの受け渡し希望時刻に対して、注文受付時に、注文量などに応じて、受け渡し予定時刻を最大２時間まで後に出来るようにしました。\n  - 音が鳴らなくなる不具合を修正しました\n- ユーザー系\n  - クレジットカード情報を「今後の支払いのために保存する」かを選べる機能を追加\n  - 注文の際に指定する時刻は上の変更に応じて「受け渡し希望時刻」と表示\n  - 注文受付時に店が指定した受け渡し予定時刻をメッセージでお知らせ\n"},{"title":"v0.5.5をリリースしました。","date":"2020-06-15","markdown":"- 管理系\n  - LINEアカウントの管理ページで、アカウントを削除できるようにしました。\n  - オーダーにユーザーの名前が表示されないバグを修正しました。\n  - Profileページの細かなバグの修正\n  - オーダーの通知音を変更できるようにしました。\n  - オーダー画面で、新規オーダーが残っている場合には、１分おきに音で知らせるように変更\n  - レストランの管理画面のどのページにいても、そのレストランに新規注文/キャンセルがあった場合に通知音が鳴るようになりました。\n  - 管理画面トップに「おもちかえり.com」からのお知らせを追加。\n  - 今日以降の注文予約が全て今日の予約に入っていたのを、未来に日付も表示するように変更しました。\n  \n- ユーザー系\n  - iPhone でログインする時にreCaptchaをタップした時に画面が白くなって何も出来なくなる問題を解決しました。\n  - 注文受理時に届くLINEメッセージに調理完了の予定時刻が入る様になりました。\n  - お店の公開リストに乗せるお店を全ての公開されているお店から、公開してデータが整ったお店のみに変更しました。\n  - USサイト(ownPlate.today)もお店の公開リストサポート\n\n"},{"title":"v0.5.4をリリースしました。","date":"2020-06-10","markdown":"  - 管理系\n    - 管理系の更新情報をお知らせ機能追加\n    - 新しい注文が入ったことをLINEのメッセージとして受け取る機能\n    - 営業時間保存でエラーになる問題の修正\n    - sitemapの追加\n  - ユーザ系\n    - 都道府県別の飲食店リストページ追加\n\n   \n"},{"title":"v0.5.2をリリースしました。","date":"2020-06-08","markdown":"  - ユーザ系\n    - Line連携を最初にした時に、それがすぐにUIに反映されないというバグを修正しました。\n  - 管理系\n    - 管理系で、保存された電話番号が読み込まれない問題の修正\n    - 受け渡し予定時刻設定が保存されない問題の修正\n    - Stripeからのcallbackを保存\n\n"},{"title":"v0.5.1をリリースしました。","date":"2020-06-05","markdown":"  - ユーザ系\n    - プロフィールページに「注文履歴」「サインアウト」「飲食店としてサインイン」のリンクを追加\n    - プロフィールページから友達設定をした直後に表示がアップデートされない問題を解決\n    - プロフィールページに「アカウント削除」を追加\n    - LINEとの連携済みの人に連携ボタンが表示されてしまうバグを修正\n    - 入店・退店記録のページで、undefined になってしまうバグを修正\n    - オーダーページで、ログインしていない状態で見たときにログイン画面を出すように修正\n    - クレジットカード番号をstripe側に記録しておき、２度目からは入力しなくて良いように変更\n    - 特定商取引のリンク追加\n    - 心付けのオプションとして５％を追加\n    - CVCの説明を追加\n  - 管理系\n    - 自分の店への入店・退店情報を見ることが出来るようにしました（匿名です）\n    - 「受け取り時の支払い」を許すかどうかを指定できるようにしました。\n    - PickUpの時間を変更可能に。\n    - 特定商取引の表記の為に、代表者氏名の入力を必須に\n    - オーダーリストページに、「音テスト」ボタンの追加\n  - 共通\n    - ホームページから、飲食店向けマニュアル、お客様向けマニュアルへのリンクを追加\n    - メニューにプロフィールページへのリンクを追加\n    - メニューから「サインアウト」「注文履歴」の削除\n\n"},{"title":"v0.4.2をリリースしました。","date":"2020-05-27","markdown":" - ユーザ系\n  - オーダーページに「メニューページを見る」ボタンの追加\n  - OGPの改善\n- 管理系\n   - カテゴリー編集中に各ボタンが機能しない問題を修正\n   - COVID-19 tracing機能追加\n - 共通\n   - 画像のリサイズをFunctionsに移動\n   - デザインの刷新\n   - ファビコンの更新\n   - Alert UIの追加（本当に..してよろしいですか？）\n \n"},{"title":"v0.4.0をリリースしました。","date":"2020-05-21","markdown":" - 管理系\n   - アレルギー表示オプション\n   - モバイルでメニューの消費税表示のレイアウトが崩れる問題の修正 & localize\n   - オーダーの状態が変化したときに音で通知する\n - ユーザ系\n   - レストランページ表示の高速化\n   - レストランページのデザイン変更\n   - アレルギー表示\n   - About画面のlocalize / Feature Hero 画像追加\n   - 価格が一万円を超えた時に、チップが NaN になるバグの修正\n   - オーダー処理の改善\n   - 注文画面にAddボタンの追加\n   - ラインを使った通知方法への切り替え（ショートメッセージから）\n   - 通知メッセージにオーダー画面へのリンクを追加\n   - オーダー画面からレストランページへの導線の追加（ロゴとレストラン名）\n   - Twitter Card対応\n - 共通\n   - お店紹介文/注文前の注意点/サンクスメッセージ機能の追加\n   \n"},{"title":"v0.3.5をリリースしました。","date":"2020-05-14","markdown":" - 管理系\n   - 日本サイトで金額表示部分を消費税表記を追加\n   - ユーザー新規登録のlocalize\n   - オーダーに日時表示を改善\n - 共通\n   - ピックアップ時間機能追加\n   - デザインの更新\n   - 税抜の表記を変更\n   - 言語切替をフッターに追加\n   - sentryの導入\n- ユーザ系\n   - 注文の際に受け取る時間の指定を可能に\n   - 注文の採番を表示するタイミングを変更\n   - OGPの改善\n   - オーダーの不具合修正\n"},{"title":"v0.3.4をリリースしました。","date":"2020-05-11","markdown":" - 管理系\n   - 日本サイトで消費税の税率の固定（入力させない）\n   - 日本サイトで消費税の消費税の内税、外税の表示切り替え\n   - 日本サイトで消費税の文言変更\n   - メニュー編集ページのデザイン調整\n   - マニュアル、サポートへのリンク\n- ユーザ系\n   - 日本サイトでメニューの消費税の表示に対応\n   - ヘッダー画像のポジションを修正（真ん中寄せ）\n - 共通\n   - 404ページのlocalize\n   - 404ページのハンドリング追加\n   - 電話番号の正規化\n"}];
export default data;
