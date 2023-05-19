import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Slider from "react-slick";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const LiveCasino = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
    "https://sportsexch.com/images/live-casino/poster/poster03.png",
    "https://sportsexch.com/images/live-casino/poster/poster04.png",
    "https://sportsexch.com/images/live-casino/poster/poster01.png",
    "https://sportsexch.com/images/live-casino/poster/poster02.png"
  ];
  let [categories] = useState({
    All: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 5,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 6,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    TopIndianGames: [
      {
        id: 1,
        title: "Andar Bahar",
        img: "https://luckmedia.link/ezg_andar_bahar/thumb.jpg",
      },
      {
        id: 2,
        title: "Lucky 7",
        img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg",
      },
      {
        id: 3,
        title: "32 Cards",
        img: "https://luckmedia.link/ezg_32_cards/thumb.jpg",
      },
      {
        id: 4,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/ezg_dragon_tiger/thumb.jpg",
      },
      {
        id: 5,
        title: "Teen Patti 3 Card",
        img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg",
      },
      {
        id: 6,
        title: "Bet on Teen Patti",
        img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg",
      },
      {
        id: 7,
        title: "Namaste Roulette",
        img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg",
      },
      {
        id: 8,
        title: "One Day Teen Patti",
        img: "https://luckmedia.link/ezg_one_day_teen_patti/thumb.jpg",
      },
      {
        id: 9,
        title: "Hindi Roulette",
        img: "https://luckmedia.link/evo_hindi_roulette/thumb.jpg",
      },
      {
        id: 10,
        title: "Hindi Lightning Roulette",
        img: "https://luckmedia.link/evo_hindi_lightning_roulette/thumb.jpg",
      },
      {
        id: 11,
        title: "Hindi Speed Baccarat",
        img: "https://luckmedia.link/evo_hindi_speed_baccarat/thumb.jpg",
      },
      {
        id: 12,
        title: "Teen Patti",
        img: "https://luckmedia.link/evo_teen_patti/thumb.jpg",
      },
      {
        id: 13,
        title: "Super Andar Bahar",
        img: "https://luckmedia.link/evo_super_andar_bahar/thumb.jpg",
      },
      {
        id: 14,
        title: "Ultimate Andar Bahar",
        img: "https://luckmedia.link/ezg_ultimate_andar_bahar/thumb.jpg",
      },
    ],
    LiveLobby: [
      {
        id: 1,
        title: "Baccarat Lobby",
        img: "https://luckmedia.link/evo_baccarat_lobby/thumb.jpg",
      },
      {
        id: 2,
        title: "Top Games Lobby",
        img: "https://luckmedia.link/evo_top_games_lobby/thumb.jpg",
      },
      {
        id: 3,
        title: "Games Show Lobby",
        img: "https://luckmedia.link/evo_game_shows_lobby/thumb.jpg",
      },
      {
        id: 4,
        title: "Andar Bahar Lobby",
        img: "https://luckmedia.link/ezg_andar_bahar_lobby/thumb.jpg",
      },
      {
        id: 5,
        title: "Popular Lobby",
        img: "https://luckmedia.link/ezg_popular_lobby/thumb.jpg",
      },
      {
        id: 6,
        title: "Top Games Lobby",
        img: "https://luckmedia.link/ppl_top_games_lobby/thumb.jpg",
      },
      {
        id: 7,
        title: "Game Shows Lobby",
        img: "https://luckmedia.link/ppl_game_shows_lobby/thumb.jpg",
      },
      {
        id: 8,
        title: "Sic Bo Lobby",
        img: "https://luckmedia.link/ppl_sic_bo_lobby/thumb.jpg",
      },
      {
        id: 9,
        title: "Live Lobby",
        img: "https://luckmedia.link/pltl_live_lobby/thumb.jpg",
      },
      {
        id: 10,
        title: "Roulette Lobby",
        img: "https://luckmedia.link/evo_roulette_lobby/thumb.jpg",
      },
      {
        id: 11,
        title: "Blackjack Lobby",
        img: "https://luckmedia.link/evo_blackjack_lobby/thumb.jpg",
      },
      {
        id: 12,
        title: "Poker Lobby",
        img: "https://luckmedia.link/evo_poker_lobby/thumb.jpg",
      },
      {
        id: 13,
        title: "First Person Lobby",
        img: "https://luckmedia.link/evo_first_person_lobby/thumb.jpg",
      },
      {
        id: 14,
        title: "Roulette Lobby",
        img: "https://luckmedia.link/ezg_roulette_lobby/thumb.jpg",
      },
      {
        id: 15,
        title: "Blackjack Lobby",
        img: "https://luckmedia.link/ezg_blackjack_lobby/thumb.jpg",
      },
      {
        id: 16,
        title: "Poker Lobby",
        img: "https://luckmedia.link/ezg_poker_lobby/thumb.jpg",
      },
      {
        id: 17,
        title: "Baccarat Lobby",
        img: "https://luckmedia.link/ezg_baccarat_lobby/thumb.jpg",
      },
      {
        id: 18,
        title: "Sic Bo Lobby",
        img: "https://luckmedia.link/ezg_sic_bo_lobby/thumb.jpg",
      },
      {
        id: 19,
        title: "Lucky 7 Lobby",
        img: "https://luckmedia.link/ezg_lucky_7_lobby/thumb.jpg",
      },
      {
        id: 20,
        title: "32 Cards Lobby",
        img: "https://luckmedia.link/ezg_32_cards_lobby/thumb.jpg",
      },
      {
        id: 21,
        title: "Bet on Numbers Lobby",
        img: "https://luckmedia.link/ezg_bet_on_numbers_lobby/thumb.jpg",
      },
      {
        id: 22,
        title: "Blackjack Lobby",
        img: "https://luckmedia.link/ppl_blackjack_lobby/thumb.jpg",
      },
      {
        id: 23,
        title: "Hindi Lobby",
        img: "https://luckmedia.link/evo_hindi_lobby/thumb.jpg",
      },
      {
        id: 24,
        title: "Korean Dealer Lobby",
        img: "https://luckmedia.link/evo_korean_dealer_lobby/thumb.jpg",
      },
      {
        id: 25,
        title: "Dice Lobby",
        img: "https://luckmedia.link/evo_dice_lobby/thumb.jpg",
      },
      {
        id: 26,
        title: "Royal Gaming Live Lobby",
        img: "https://luckmedia.link/roy_royal_gaming_live_lobby/thumb.jpg",
      },
      {
        id: 27,
        title: "Lobby",
        img: "https://luckmedia.link/aug_lobby/thumb.jpg",
      },
      {
        id: 28,
        title: "Lobby",
        img: "https://luckmedia.link/aes_lobby/thumb.jpg",
      },

    ],
    CrashGames: [
      {
        id: 1,
        title: "Zeppelin",
        img: "https://luckmedia.link/btsl_zeppelin/thumb.jpg",
      },
      {
        id: 2,
        title: "Spaceman",
        img: "https://luckmedia.link/pgp_spaceman/thumb.jpg",
      },
      {
        id: 3,
        title: "Pilot Cup",
        img: "https://luckmedia.link/gmz_pilot_cup/thumb.jpg",
      },
      {
        id: 4,
        title: "JetX",
        img: "https://luckmedia.link/sms_jetx/thumb.jpg",
      },
      {
        id: 5,
        title: "Cappadocia",
        img: "https://luckmedia.link/sms_cappadocia/thumb.jpg",
      },
      {
        id: 6,
        title: "JetX3",
        img: "https://luckmedia.link/sms_jetx3/thumb.jpg",
      },
      {
        id: 7,
        title: "Baloon",
        img: "https://luckmedia.link/sms_baloon/thumb.jpg",
      },
      {
        id: 8,
        title: "CricketX",
        img: "https://luckmedia.link/sms_cricketx/thumb.jpg",
      },
      {
        id: 9,
        title: "FootballX",
        img: "https://luckmedia.link/sms_footballx/thumb.jpg",
      },
      {
        id: 10,
        title: "Pilot Coin",
        img: "https://luckmedia.link/gmz_pilot_coin/thumb.jpg",
      },
      {
        id: 11,
        title: "SpinX",
        img: "https://luckmedia.link/sms_spinx/thumb.jpg",
      },
      {
        id: 12,
        title: "Aviator",
        img: "https://luckmedia.link/spb_aviator/thumb.jpg",
      },
      {
        id: 13,
        title: "NFT Aviatrix",
        img: "https://luckmedia.link/avx_nft_aviatrix/thumb.jpg",
      },
      {
        id: 14,
        title: "Pilot",
        img: "https://luckmedia.link/gmz_pilot/thumb.jpg",
      },
    ],
    DragonTiger: [
      {
        id: 1,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/evo_dragon_tiger/thumb.jpg",
      },
      {
        id: 2,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/ppl_dragon_tiger/thumb.jpg",
      },
      {
        id: 3,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/aug_dragon_tiger/thumb.jpg",
      },
      {
        id: 4,
        title: "Dragon Tiger Lobby",
        img: "https://luckmedia.link/ppl_dragon_tiger_lobby/thumb.jpg",
      },
      {
        id: 5,
        title: "First Person Dragon Tiger",
        img: "https://luckmedia.link/evo_first_person_dragon_tiger/thumb.jpg",
      },
      {
        id: 6,
        title: "Bet On Dragon Tiger",
        img: "https://luckmedia.link/pltl_bet_on_dragon_tiger/thumb.jpg",
      },
      {
        id: 7,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/pltl_dragon_tiger/thumb.jpg",
      },
      {
        id: 8,
        title: "Football Studio",
        img: "https://luckmedia.link/evo_football_studio/thumb.jpg",
      },
      {
        id: 9,
        title: "Emperor Dragon Tiger",
        img: "https://luckmedia.link/evo_emperor_dragon_tiger/thumb.jpg",
      },
      {
        id: 10,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/aes_dragontiger/thumb.jpg",
      },
      {
        id: 11,
        title: "Dragon Tiger",
        img: "https://luckmedia.link/roy_dragon_tiger/thumb.jpg",
      },
    ],
    GameShow: [
      {
        id: 1,
        title: "Wheelbet",
        img: "https://luckmedia.link/tvb_wheelbet/thumb.jpg",
      },
      {
        id: 2,
        title: "Crazy Time",
        img: "https://luckmedia.link/evo_crazy_time/thumb.jpg",
      },
      {
        id: 3,
        title: "Mega Wheel",
        img: "https://luckmedia.link/ppl_mega_wheel/thumb.jpg",
      },
      {
        id: 4,
        title: "Spin2Wheels",
        img: "https://luckmedia.link/tvb_spin2wheels/thumb.jpg",
      },
      {
        id: 5,
        title: "Sweet Bonanza Candy Land",
        img: "https://luckmedia.link/ppl_sweet_bonanza_candy_land/thumb.jpg",
      },
      {
        id: 6,
        title: "Boom City",
        img: "https://luckmedia.link/ppl_boom_city/thumb.jpg",
      },
      {
        id: 7,
        title: "First Person Craps",
        img: "https://luckmedia.link/evo_first_person_craps/thumb.jpg",
      },
      {
        id: 8,
        title: "Buffalo Blitz España",
        img: "https://luckmedia.link/pltl_buffalo_blitz_espana/thumb.jpg",
      },
      {
        id: 9,
        title: "First Person Dream Catcher",
        img: "https://luckmedia.link/evo_first_person_dream_catcher/thumb.jpg",
      },
      {
        id: 10,
        title: "Football Card Showdown Live",
        img: "https://luckmedia.link/pltl_football_card_showdown_live/thumb.jpg",
      },
      {
        id: 11,
        title: "Adventures Beyond Wonderland",
        img: "https://luckmedia.link/pltl_adventures_beyond_wonderland_live/thumb.jpg",
      },
      {
        id: 12,
        title: "Buffalo Blitz Live Slots",
        img: "https://luckmedia.link/pltl_buffalo_blitz_live_slots/thumb.jpg",
      },
      {
        id: 13,
        title: "God Of Storms Live Slots",
        img: "https://luckmedia.link/pltl_god_of_storms_live_slots/thumb.jpg",
      },
      {
        id: 14,
        title: "Hi-Lo",
        img: "https://luckmedia.link/pltl_hilo/thumb.jpg",
      },
      {
        id: 15,
        title: "Spin a Win",
        img: "https://luckmedia.link/pltl_spin_a_win/thumb.jpg",
      },
      {
        id: 16,
        title: "Cash or Crash",
        img: "https://luckmedia.link/evo_cash_or_crash/thumb.jpg",
      },
      {
        id: 17,
        title: "Football Studio Dice",
        img: "https://luckmedia.link/evo_football_studio_dice/thumb.jpg",
      },
      {
        id: 18,
        title: "Gonzo's Treasure Hunt",
        img: "https://luckmedia.link/evo_gonzos_treasure_hunt/thumb.jpg",
      },
      {
        id: 19,
        title: "The Greatest Cards Show",
        img: "https://luckmedia.link/pltl_the_greatest_cards_show/thumb.jpg",
      },
      {
        id: 20,
        title: "Lightning Dice",
        img: "https://luckmedia.link/evo_lightning_dice/thumb.jpg",
      },
      {
        id: 21,
        title: "Everybody's Jackpot Live",
        img: "https://luckmedia.link/pltl_everybodys_jackpot_live/thumb.jpg",
      },
      {
        id: 22,
        title: "Monopoly Big Baller",
        img: "https://luckmedia.link/evo_monopoly_big_baller/thumb.jpg",
      },
      {
        id: 23,
        title: "Dream Catcher",
        img: "https://luckmedia.link/evo_dream_catcher/thumb.jpg",
      },
      {
        id: 24,
        title: "MONOPOLY Live",
        img: "https://luckmedia.link/evo_monopoly_live/thumb.jpg",
      },
      {
        id: 25,
        title: "Spin A Win Wild Live",
        img: "https://luckmedia.link/pltl_spin_a_win_wild_live/thumb.jpg",
      },
      {
        id: 26,
        title: "Crazy Coin Flip",
        img: "https://luckmedia.link/evo_crazy_coin_flip/thumb.jpg",
      },
    ],
    LiveBaccarat: [
      {
        id: 1,
        title: "Lightning Baccarat",
        img: "https://luckmedia.link/evo_lightning_baccarat/thumb.jpg",
      },
      {
        id: 2,
        title: "Speed Baccarat A",
        img: "https://luckmedia.link/evo_speed_baccarat_a/thumb.jpg",
      },
      {
        id: 3,
        title: "Korean Speaking Speed Bac",
        img: "https://luckmedia.link/evo_korean_speaking_speed_baccarat/thumb.jpg",
      },
      {
        id: 4,
        title: "Peek Baccarat",
        img: "https://luckmedia.link/evo_peek_baccarat/thumb.jpg",
      },
      {
        id: 5,
        title: "No Commission Speed Back",
        img: "https://luckmedia.link/evo_no_commission_speed_baccarat_a/thumb.jpg",
      },
      {
        id: 6,
        title: "Andar Bahar",
        img: "https://luckmedia.link/ppl_andar_bahar/thumb.jpg",
      },
      {
        id: 7,
        title: "No Commission Baccarat",
        img: "https://luckmedia.link/evo_no_commission_baccarat/thumb.jpg",
      },
      {
        id: 8,
        title: "Baccarat Squeeze",
        img: "https://luckmedia.link/evo_baccarat_squeeze/thumb.jpg",
      },
      {
        id: 9,
        title: "Salon Privé Baccarat A",
        img: "https://luckmedia.link/evo_salon_priv_baccarat_a/thumb.jpg",
      },
      {
        id: 10,
        title: "Baccarat",
        img: "https://luckmedia.link/aug_baccarat/thumb.jpg",
      },
      {
        id: 11,
        title: "Salon Privé Baccarat B",
        img: "https://luckmedia.link/evo_salon_priv_baccarat_b/thumb.jpg",
      },
      {
        id: 12,
        title: "Salon Privé Baccarat C",
        img: "https://luckmedia.link/evo_salon_priv_baccarat_b/thumb.jpg",
      },
      {
        id: 13,
        title: "No Comm Speed Baccarat 1",
        img: "https://luckmedia.link/ppl_no_comm_speed_baccarat_1/thumb.jpg",
      },
      {
        id: 14,
        title: "Baccarat",
        img: "https://luckmedia.link/pltl_baccarat/thumb.jpg",
      },
      {
        id: 15,
        title: "Grand Baccarat",
        img: "https://luckmedia.link/pltl_grand_baccarat/thumb.jpg",
      },
      {
        id: 16,
        title: "Squeeze Baccarat",
        img: "https://luckmedia.link/pltl_squeeze_baccarat/thumb.jpg",
      },
      {
        id: 17,
        title: "Speed Baccarat",
        img: "https://luckmedia.link/pltl_speed_baccarat/thumb.jpg",
      },
      {
        id: 18,
        title: "VIP Baccarat",
        img: "https://luckmedia.link/pltl_vip_baccarat/thumb.jpg",
      },
      {
        id: 19,
        title: "Bet on Baccarat",
        img: "https://luckmedia.link/pltl_bet_on_baccarat/thumb.jpg",
      },
      {
        id: 20,
        title: "Ru Yi Speed Baccarat",
        img: "https://luckmedia.link/pltl_ru_yi_speed_baccarat/thumb.jpg",
      },
      {
        id: 21,
        title: "Speed Baccarat - Korean",
        img: "https://luckmedia.link/ppl_speed_baccarat__korean/thumb.jpg",
      },
      {
        id: 22,
        title: "Fortune 6 Baccarat",
        img: "https://luckmedia.link/ppl_fortune_6_baccarat/thumb.jpg",
      },
      {
        id: 23,
        title: "Baccarat Brasileira",
        img: "https://luckmedia.link/pltl_speed_baccarat_2/thumb.jpg",
      },
      {
        id: 24,
        title: "Japanese Squeeze Baccarat",
        img: "https://luckmedia.link/evo_hindi_speed_baccarat/thumb.jpg",
      },
      {
        id: 25,
        title: "Hindi Speed Baccarat",
        img: "https://luckmedia.link/evo_hindi_speed_baccarat/thumb.jpg",
      },
      {
        id: 26,
        title: "Golden Wealth Baccarat",
        img: "https://luckmedia.link/evo_golden_wealth_baccarat/thumb.jpg",
      },
      {
        id: 27,
        title: "First Person Lightning Bacc",
        img: "https://luckmedia.link/evo_first_person_lightning_baccarat/thumb.jpg",
      },
      {
        id: 28,
        title: "Baccarat Classic",
        img: "https://luckmedia.link/aes_baccarat_classic/thumb.jpg",
      },
      {
        id: 29,
        title: "Baccarat",
        img: "https://luckmedia.link/aes_baccarat/thumb.jpg",
      },
      {
        id: 30,
        title: "Baccarat Insurance",
        img: "https://luckmedia.link/aes_baccarat_insurance/thumb.jpg",
      },
      {
        id: 31,
        title: "Baccarat",
        img: "https://luckmedia.link/ezg_baccarat/thumb.jpg",
      },
      {
        id: 32,
        title: "Speed Cricket Baccarat",
        img: "https://luckmedia.link/ezg_speed_cricket_baccarat/thumb.jpg",
      },
      {
        id: 33,
        title: "Fiesta Baccarat",
        img: "https://luckmedia.link/ezg_fiesta_baccarat/thumb.jpg",
      },
      {
        id: 34,
        title: "Fortune Baccarat",
        img: "https://luckmedia.link/ezg_fortune_baccarat/thumb.jpg",
      },
      {
        id: 35,
        title: "Baccarat Knock Out",
        img: "https://luckmedia.link/ezg_baccarat_knock_out/thumb.jpg",
      },
      {
        id: 36,
        title: "Baccarat No Commission",
        img: "https://luckmedia.link/ezg_baccarat_no_commission/thumb.jpg",
      },
    ],
    LiveBlackjack: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    LiveDealer: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    LiveLottery: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    LivePoker: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    LiveRoulette: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    LiveSickBo: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    Lottery: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
    VirtualSports: [
      {
        id: 1,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 2,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 3,
        title: "TeenPatti",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
      {
        id: 4,
        title: "Teen Paati",
        img: "https://d2.fawk.app/assets/images/LeftSiteMenu/games/67690.jpg",
      },
    ],
  });
  return (
    <div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              className="w-full p-2 rounded-2xl"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <Tab.Group>
        <Tab.List className="flex gap-2 rounded-xl bg-blue-900/20 p-1 scroll-x">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md py-2 px-2 text-sm font-medium leading-5 ",
                  " ring-opacity-60 ring-offset-2 max-w-[100px]",
                  selected
                    ? "bg-white "
                    : "text-blue-100 bg-[#32383e] hover:bg-[#32383e] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                ""
                //     // 'rounded-md w-full bg-white p-3',
                //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div class="-m-1 flex flex-wrap md:-m-2">
                {posts.map((post) => (
                  <div class="flex  w-1/4 flex-wrap">
                    <div class="w-full p-2 md:p-4 text-white text-sm font-bold flex flex-col items-center">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src={post.img}
                      />
                      {post.title}
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
