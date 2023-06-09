import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
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
    "https://sportsexch.com/images/live-casino/poster/poster02.png",
  ];
  let [categories] = useState({
    All: [
      {
        icon: "https://sportsexch.com/images/icons/top_indian_games.png",
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
        title: "Korean Dealer Power Blackjack",
        img: "https://luckmedia.link/evo_korean_dealer_power_blackjack/thumb.jpg",
      },
      {
        id: 2,
        title: "Korean Dealer Speed Blackjack",
        img: "https://luckmedia.link/evo_korean_dealer_speed_blackjack/thumb.jpg",
      },
      {
        id: 3,
        title: "One Blackjack",
        img: "https://luckmedia.link/ppl_one_blackjack/thumb.jpg",
      },
      {
        id: 4,
        title: "BlackJack",
        img: "https://luckmedia.link/tvb_blackjack/thumb.jpg",
      },
      {
        id: 5,
        title: "Blackjack 1 - Azure",
        img: "https://luckmedia.link/evo_free_bet_blackjack/thumb.jpg",
      },
      {
        id: 6,
        title: "Free Bet Blackjack",
        img: "https://luckmedia.link/evo_free_bet_blackjack/thumb.jpg",
      },
      {
        id: 7,
        title: "Power Blackjack",
        img: "https://luckmedia.link/evo_power_blackjack/thumb.jpg",
      },
      {
        id: 8,
        title: "Infinite Blackjack",
        img: "https://luckmedia.link/evo_infinite_blackjack/thumb.jpg",
      },
      {
        id: 9,
        title: "Blackjack Party",
        img: "https://luckmedia.link/evo_blackjack_party/thumb.jpg",
      },
      {
        id: 10,
        title: "Speed VIP Blackjack A",
        img: "https://luckmedia.link/evo_speed_vip_blackjack_a/thumb.jpg",
      },
      {
        id: 11,
        title: "Quantum Blackjack Plus",
        img: "https://luckmedia.link/pltl_quantum_blackjack_plus/thumb.jpg",
      },
      {
        id: 12,
        title: "Italian Cashback Blackjack",
        img: "https://luckmedia.link/pltl_italian_cashback_blackjack/thumb.jpg",
      },
      {
        id: 13,
        title: "Blackjack VIP 1",
        img: "https://luckmedia.link/evo_blackjack_vip_1/thumb.jpg",
      },
      {
        id: 14,
        title: "Alexandrite Blackjack",
        img: "https://luckmedia.link/pltl_alexandrite_blackjack/thumb.jpg",
      },
      {
        id: 15,
        title: "All Bets Blackjack",
        img: "https://luckmedia.link/pltl_all_bets_blackjack/thumb.jpg",
      },
      {
        id: 16,
        title: "Blackjack Italiano VIP",
        img: "https://luckmedia.link/pltl_blackjack_italiano_vip/thumb.jpg",
      },
      {
        id: 18,
        title: "Deutsches Blackjack",
        img: "https://luckmedia.link/pltl_deutsches_blackjack/thumb.jpg",
      },
      {
        id: 19,
        title: "Lounge Blackjack 1",
        img: "https://luckmedia.link/pltl_lounge_blackjack_1/thumb.jpg",
      },
      {
        id: 20,
        title: "Speed Blackjack 1 - Ruby",
        img: "https://luckmedia.link/ppl_speed_blackjack_1__ruby/thumb.jpg",
      },
      {
        id: 21,
        title: "Blackjack Silver A",
        img: "https://luckmedia.link/evo_blackjack_silver_a/thumb.jpg",
      },
      {
        id: 22,
        title: "Majority Rules Speed Blackjack",
        img: "https://luckmedia.link/pltl_majority_rules_speed_blackjack/thumb.jpg",
      },
      {
        id: 23,
        title: "Royale Blackjack 1",
        img: "https://luckmedia.link/pltl_royale_blackjack_1/thumb.jpg",
      },
      {
        id: 24,
        title: "VIP Blackjack 1 - Ruby",
        img: "https://luckmedia.link/ppl_vip_blackjack_1__ruby/thumb.jpg",
      },
      {
        id: 25,
        title: "Blackjack VIP A",
        img: "https://luckmedia.link/evo_blackjack_vip_a/thumb.jpg",
      },
      {
        id: 26,
        title: "Soirée Elite Blackjack 1",
        img: "https://luckmedia.link/pltl_soire_elite_blackjack_1/thumb.jpg",
      },
      {
        id: 27,
        title: "Soirée Elite VIP Blackjack",
        img: "https://luckmedia.link/pltl_soire_elite_vip_blackjack/thumb.jpg",
      },
      {
        id: 28,
        title: "Unlimited Blackjack",
        img: "https://luckmedia.link/pltl_unlimited_blackjack/thumb.jpg",
      },
      {
        id: 29,
        title: "Blackjack VIP Alpha",
        img: "https://luckmedia.link/evo_blackjack_vip_alpha/thumb.jpg",
      },
      {
        id: 30,
        title: "Blackjack Platinum VIP",
        img: "https://luckmedia.link/evo_blackjack_platinum_vip/thumb.jpg",
      },
      {
        id: 31,
        title: "Blackjack Diamond VIP",
        img: "https://luckmedia.link/evo_blackjack_diamond_vip/thumb.jpg",
      },
      {
        id: 32,
        title: "Grand Blackjack",
        img: "https://luckmedia.link/pltl_grand_blackjack/thumb.jpg",
      },
      {
        id: 33,
        title: "Salon Privé Blackjack A",
        img: "https://luckmedia.link/evo_salon_priv_blackjack_a/thumb.jpg",
      },
      {
        id: 34,
        title: "Salon Privé Blackjack B",
        img: "https://luckmedia.link/evo_salon_priv_blackjack_b/thumb.jpg",
      },
      {
        id: 35,
        title: "Lightning Blackjack",
        img: "https://luckmedia.link/evo_lightning_blackjack/thumb.jpg",
      },
      {
        id: 36,
        title: "First Person Lightning Blackjack",
        img: "https://luckmedia.link/evo_first_person_lightning_blackjack/thumb.jpg",
      },
      {
        id: 37,
        title: "Blackjack Platinum 1",
        img: "https://luckmedia.link/ezg_blackjack_platinum_1/thumb.jpg",
      },
      {
        id: 38,
        title: "Blackjack 1",
        img: "https://luckmedia.link/ezg_blackjack_1/thumb.jpg",
      },
      {
        id: 39,
        title: "Blackjack Gold 1",
        img: "https://luckmedia.link/ezg_blackjack_gold_1/thumb.jpg",
      },
      {
        id: 40,
        title: "VIP Blackjack with Surrender",
        img: "https://luckmedia.link/ezg_vip_blackjack_with_surrender/thumb.jpg",
      },
      {
        id: 41,
        title: "Diamond VIP Blackjack",
        img: "https://luckmedia.link/ezg_diamond_vip_blackjack/thumb.jpg",
      },
      {
        id: 42,
        title: "Italian Blackjack",
        img: "https://luckmedia.link/ezg_italian_blackjack/thumb.jpg",
      },
      {
        id: 43,
        title: "Rumba Blackjack 1",
        img: "https://luckmedia.link/ezg_rumba_blackjack_1/thumb.jpg",
      },
      {
        id: 44,
        title: "Turkish Blackjack",
        img: "https://luckmedia.link/ezg_turkish_blackjack/thumb.jpg",
      },
      {
        id: 45,
        title: "White Russian",
        img: "https://luckmedia.link/ezg_white_russian/thumb.jpg",
      },
      {
        id: 46,
        title: "Unlimited Turkish Blackjack",
        img: "https://luckmedia.link/ezg_unlimited_turkish_blackjack/thumb.jpg",
      },
      {
        id: 47,
        title: "Spanish Unlimited Blackjack",
        img: "https://luckmedia.link/ezg_mambo_unlimited_bj/thumb.jpg",
      },
      {
        id: 48,
        title: "Fiesta Blackjack Unlimited",
        img: "https://luckmedia.link/ezg_fiesta_blackjack_unlimited/thumb.jpg",
      },
      {
        id: 49,
        title: "Blackjack Salon Privé",
        img: "https://luckmedia.link/ezg_blackjack_salon_priv/thumb.jpg",
      },
    ],
    LiveDealer: [
      {
        id: 1,
        title: "War Of Elements",
        img: "https://luckmedia.link/tvb_war_of_elements/thumb.jpg",
      },
      {
        id: 2,
        title: "Fan Tan",
        img: "https://luckmedia.link/evo_fan_tan/thumb.jpg",
      },
      {
        id: 3,
        title: "Joker",
        img: "https://luckmedia.link/tvb_jokerbet/thumb.jpg",
      },
      {
        id: 4,
        title: "32 Card Casino",
        img: "https://luckmedia.link/aug_32_card_casino/thumb.jpg",
      },
      {
        id: 5,
        title: "Hi Low",
        img: "https://luckmedia.link/aug_hi_low/thumb.jpg",
      },
      {
        id: 6,
        title: "Matka",
        img: "https://luckmedia.link/aug_matka/thumb.jpg",
      },
      {
        id: 7,
        title: "7 Up & Down",
        img: "https://luckmedia.link/aug_7_up__down/thumb.jpg",
      },
      {
        id: 8,
        title: "Amar Akbar Anthony",
        img: "https://luckmedia.link/aug_amar_akbar_anthony/thumb.jpg",
      },
      {
        id: 9,
        title: "Race 20-20",
        img: "https://luckmedia.link/aug_race_2020/thumb.jpg",
      },
      {
        id: 10,
        title: "Bollywood Casino",
        img: "https://luckmedia.link/aug_bollywood_casino/thumb.jpg",
      },
      {
        id: 11,
        title: "Trio",
        img: "https://luckmedia.link/aug_trio/thumb.jpg",
      },
      {
        id: 12,
        title: "Casino Meter",
        img: "https://luckmedia.link/aug_casino_meter/thumb.jpg",
      },
      {
        id: 13,
        title: "Queen Race",
        img: "https://luckmedia.link/aug_queen_race/thumb.jpg",
      },
      {
        id: 14,
        title: "The Trap",
        img: "https://luckmedia.link/aug_the_trap/thumb.jpg",
      },
      {
        id: 15,
        title: "Craps",
        img: "https://luckmedia.link/evo_craps/thumb.jpg",
      },
      {
        id: 16,
        title: "Casino War",
        img: "https://luckmedia.link/aug_casino_war/thumb.jpg",
      },
      {
        id: 17,
        title: "29 Card Baccarat",
        img: "https://luckmedia.link/aug_29_card_baccarat/thumb.jpg",
      },
      {
        id: 18,
        title: "Race to 17",
        img: "https://luckmedia.link/aug_race_to_17/thumb.jpg",
      },
      {
        id: 19,
        title: "Extra Andar Bahar",
        img: "https://luckmedia.link/aes_extra_andar_bahar/thumb.jpg",
      },
      {
        id: 20,
        title: "Bac Bo",
        img: "https://luckmedia.link/evo_bac_bo/thumb.jpg",
      },
      {
        id: 21,
        title: "Red Blue Duel",
        img: "https://luckmedia.link/aes_red_blue_duel/thumb.jpg",
      },
      {
        id: 22,
        title: "Thai Hi Lo",
        img: "https://luckmedia.link/aes_thai_hi_lo/thumb.jpg",
      },
      {
        id: 23,
        title: "Thai Fish Prawn Crab",
        img: "https://luckmedia.link/aes_thai_fish_prawn_crab/thumb.jpg",
      },
      {
        id: 24,
        title: "Korean Dealer Baseball Studio",
        img: "https://luckmedia.link/evo_korean_dealer_baseball_studio/thumb.jpg",
      },
      {
        id: 25,
        title: "7 Up Down",
        img: "https://luckmedia.link/roy_7_up_down/thumb.jpg",
      },
      {
        id: 26,
        title: "Cricket War",
        img: "https://luckmedia.link/roy_cricket_war/thumb.jpg",
      },
      {
        id: 27,
        title: "Amar Akbar Anthony",
        img: "https://luckmedia.link/roy_amar_akbar_anthony/thumb.jpg",
      },
      {
        id: 28,
        title: "3 Cards Judgement",
        img: "https://luckmedia.link/roy_3_cards_judgement/thumb.jpg",
      },
      {
        id: 29,
        title: "Casino War",
        img: "https://luckmedia.link/roy_casino_war/thumb.jpg",
      },
      {
        id: 30,
        title: "Worli Matka",
        img: "https://luckmedia.link/roy_worli_matka/thumb.jpg",
      },
      {
        id: 31,
        title: "Bollywood Casino",
        img: "https://luckmedia.link/roy_bollywood_casino/thumb.jpg",
      },
      {
        id: 32,
        title: "Book Cricket",
        img: "https://luckmedia.link/roy_book_cricket/thumb.jpg",
      },
      {
        id: 33,
        title: "HighLow",
        img: "https://luckmedia.link/roy_highlow/thumb.jpg",
      },
      {
        id: 34,
        title: "Dead or Alive Saloon",
        img: "https://luckmedia.link/evo_dead_or_alive_saloon/thumb.jpg",
      },
    ],
    LiveLottery: [
      {
        id: 1,
        title: "Lucky 7",
        img: "https://luckmedia.link/ezg_lucky_7/thumb.jpg",
      },
      {
        id: 2,
        title: "32 Cards",
        img: "https://luckmedia.link/ezg_32_cards/thumb.jpg",
      },
      {
        id: 3,
        title: "5Bet",
        img: "https://luckmedia.link/tvb_5bet/thumb.jpg",
      },
      {
        id: 4,
        title: "7Bet",
        img: "https://luckmedia.link/tvb_7bet/thumb.jpg",
      },
      {
        id: 5,
        title: "Keno",
        img: "https://luckmedia.link/tvb_keno/thumb.jpg",
      },
      {
        id: 6,
        title: "1Bet",
        img: "https://luckmedia.link/tvb_1bet/thumb.jpg",
      },
      {
        id: 7,
        title: "Lucky6",
        img: "https://luckmedia.link/tvb_lucky6/thumb.jpg",
      },
      {
        id: 8,
        title: "FruitRace",
        img: "https://luckmedia.link/tvb_fruitrace/thumb.jpg",
      },
      {
        id: 9,
        title: "Mega6",
        img: "https://luckmedia.link/tvb_mega6/thumb.jpg",
      },
      {
        id: 10,
        title: "Mega Ball",
        img: "https://luckmedia.link/evo_mega_ball/thumb.jpg",
      },
      {
        id: 11,
        title: "Lottery",
        img: "https://luckmedia.link/roy_lottery/thumb.jpg",
      },
      {
        id: 12,
        title: "Bet On Numbers HD",
        img: "https://luckmedia.link/ezg_bet_on_numbers_hd/thumb.jpg",
      },
    ],
    LivePoker: [
      {
        id: 1,
        title: "Poker",
        img: "https://luckmedia.link/tvb_poker/thumb.jpg",
      },
      {
        id: 2,
        title: "Teen Patti",
        img: "https://luckmedia.link/evo_teen_patti/thumb.jpg",
      },
      {
        id: 3,
        title: "Teen Patti",
        img: "https://luckmedia.link/tvb_teen_patti/thumb.jpg",
      },
      {
        id: 4,
        title: "Andar Bahar",
        img: "https://luckmedia.link/tvb_andar_bahar/thumb.jpg",
      },
      {
        id: 5,
        title: "Teen Patti One Day",
        img: "https://luckmedia.link/aug_teen_patti_one_day/thumb.jpg",
      },
      {
        id: 6,
        title: "2 Card Teen Patti",
        img: "https://luckmedia.link/aug_2_card_teen_patti/thumb.jpg",
      },
      {
        id: 7,
        title: "Poker",
        img: "https://luckmedia.link/aug_poker/thumb.jpg",
      },
      {
        id: 8,
        title: "Six Player Poker",
        img: "https://luckmedia.link/aug_six_player_poker/thumb.jpg",
      },
      {
        id: 9,
        title: "Andar Bahar",
        img: "https://luckmedia.link/aug_andar_bahar/thumb.jpg",
      },
      {
        id: 10,
        title: "Muflis Teen Patti",
        img: "https://luckmedia.link/aug_muflis_teen_patti/thumb.jpg",
      },
      {
        id: 11,
        title: "Poker 20-20",
        img: "https://luckmedia.link/aug_poker_2020/thumb.jpg",
      },
      {
        id: 12,
        title: "Teen Patti Test",
        img: "https://luckmedia.link/aug_teen_patti_test/thumb.jpg",
      },
      {
        id: 13,
        title: "Teen Patti Open",
        img: "https://luckmedia.link/aug_teen_patti_open/thumb.jpg",
      },
      {
        id: 14,
        title: "Ultimate Andar Bahar",
        img: "https://luckmedia.link/ezg_ultimate_andar_bahar/thumb.jpg",
      },
      {
        id: 15,
        title: "Andar Bahar",
        img: "https://luckmedia.link/pltl_andar_bahar/thumb.jpg",
      },
      {
        id: 16,
        title: "3 Card Brag",
        img: "https://luckmedia.link/pltl_3_card_brag/thumb.jpg",
      },
      {
        id: 18,
        title: "Casino Hold'em",
        img: "https://luckmedia.link/pltl_casino_holdem/thumb.jpg",
      },
      {
        id: 19,
        title: "Teen Patti Live",
        img: "https://luckmedia.link/pltl_teen_patti_live/thumb.jpg",
      },
      {
        id: 20,
        title: "Casino Stud Poker",
        img: "https://luckmedia.link/pltl_casino_stud_poker/thumb.jpg",
      },
      {
        id: 21,
        title: "Bet on Poker",
        img: "https://luckmedia.link/pltl_bet_on_poker/thumb.jpg",
      },
      {
        id: 22,
        title: "Royal Poker",
        img: "https://luckmedia.link/ezg_royal_poker/thumb.jpg",
      },
      {
        id: 23,
        title: "Texas Hold'em Bonus Poker",
        img: "https://luckmedia.link/evo_texas_holdem_bonus_poker/thumb.jpg",
      },
      {
        id: 24,
        title: "Caribbean Stud Poker",
        img: "https://luckmedia.link/evo_caribbean_stud_poker/thumb.jpg",
      },
      {
        id: 25,
        title: "Triple Card Poker",
        img: "https://luckmedia.link/evo_triple_card_poker/thumb.jpg",
      },
      {
        id: 26,
        title: "Deal or No Deal",
        img: "https://luckmedia.link/evo_deal_or_no_deal/thumb.jpg",
      },
      {
        id: 27,
        title: "Extreme Texas Hold'em",
        img: "https://luckmedia.link/evo_extreme_texas_holdem/thumb.jpg",
      },
      {
        id: 28,
        title: "2 Hand Casino Hold'em",
        img: "https://luckmedia.link/evo_2_hand_casino_holdem/thumb.jpg",
      },
      {
        id: 29,
        title: "Casino Hold'em",
        img: "https://luckmedia.link/evo_casino_holdem/thumb.jpg",
      },
      {
        id: 30,
        title: "Side Bet City",
        img: "https://luckmedia.link/evo_side_bet_city/thumb.jpg",
      },
      {
        id: 31,
        title: "Super Andar Bahar",
        img: "https://luckmedia.link/evo_super_andar_bahar/thumb.jpg",
      },
      {
        id: 32,
        title: "Teen Patti",
        img: "https://luckmedia.link/roy_teen_patti/thumb.jpg",
      },
      {
        id: 33,
        title: "Muflis Teen Patti",
        img: "https://luckmedia.link/roy_muflis_teen_patti/thumb.jpg",
      },
      {
        id: 34,
        title: "Casino Hold'em 1",
        img: "https://luckmedia.link/ezg_casino_holdem_1/thumb.jpg",
      },
      {
        id: 35,
        title: "Teen Patti 3 Card",
        img: "https://luckmedia.link/ezg_teen_patti_3_card/thumb.jpg",
      },
      {
        id: 36,
        title: "Bet on Teen Patti",
        img: "https://luckmedia.link/ezg_bet_on_teen_patti/thumb.jpg",
      },
      {
        id: 37,
        title: "One Day Teen Patti",
        img: "https://luckmedia.link/ezg_one_day_teen_patti/thumb.jpg",
      },
    ],
    LiveRoulette: [
      {
        id: 1,
        title: "Roulette 9 - The Club",
        img: "https://luckmedia.link/ppl_roulette_9__the_club/thumb.jpg",
      },
      {
        id: 2,
        title: "Mega Roulette",
        img: "https://luckmedia.link/ppl_mega_roulette/thumb.jpg",
      },
      {
        id: 3,
        title: "Roulette 8 Indian",
        img: "https://luckmedia.link/ppl_roulette_8_indian/thumb.jpg",
      },
      {
        id: 4,
        title: "Gold Bar Roulette",
        img: "https://luckmedia.link/evo_gold_bar_roulette/thumb.jpg",
      },
      {
        id: 5,
        title: "Roulette",
        img: "https://luckmedia.link/aug_roulette/thumb.jpg",
      },
      {
        id: 6,
        title: "Bucharest Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 7,
        title: "Arabic Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 8,
        title: "Ruyi Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 9,
        title: "Slingshot Ruleta España",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 10,
        title: "EZ Dealer Roulette",
        img: "https://luckmedia.link/ezg_ez_dealer_roulette/thumb.jpg",
      },
      {
        id: 11,
        title: "American Roulette",
        img: "https://luckmedia.link/pltl_american_roulette/thumb.jpg",
      },
      {
        id: 12,
        title: "Football Roulette",
        img: "https://luckmedia.link/pltl_football_roulette/thumb.jpg",
      },
      {
        id: 13,
        title: "French Roulette",
        img: "https://luckmedia.link/pltl_french_roulette/thumb.jpg",
      },
      {
        id: 14,
        title: "Greek Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 15,
        title: "Hindi Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 16,
        title: "Prestige Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 18,
        title: "Speed Auto Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 19,
        title: "Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 20,
        title: "Auto Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 21,
        title: "Speed Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 22,
        title: "Turkish Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 23,
        title: "UK Roulette",
        img: "https://luckmedia.link/pltl_bucharest_roulette/thumb.jpg",
      },
      {
        id: 24,
        title: "Mega Fire Blaze Roulette Live",
        img: "https://luckmedia.link/pltl_mega_fire_blaze_roulette_live/thumb.jpg",
      },
      {
        id: 25,
        title: "Lightning Roulette",
        img: "https://luckmedia.link/evo_lightning_roulette/thumb.jpg",
      },
      {
        id: 26,
        title: "Roulette",
        img: "https://luckmedia.link/evo_roulette/thumb.jpg",
      },
      {
        id: 27,
        title: "Immersive Roulette",
        img: "https://luckmedia.link/evo_immersive_roulette/thumb.jpg",
      },
      {
        id: 28,
        title: "Instant Roulette",
        img: "https://luckmedia.link/evo_instant_roulette/thumb.jpg",
      },
      {
        id: 29,
        title: "Auto-Roulette",
        img: "https://luckmedia.link/evo_autoroulette/thumb.jpg",
      },
      {
        id: 30,
        title: "Speed Roulette",
        img: "https://luckmedia.link/evo_speed_roulette/thumb.jpg",
      },
      {
        id: 31,
        title: "VIP Roulette",
        img: "https://luckmedia.link/evo_vip_roulette/thumb.jpg",
      },
      {
        id: 32,
        title: "American Roulette",
        img: "https://luckmedia.link/evo_american_roulette/thumb.jpg",
      },
      {
        id: 33,
        title: "Double Ball Roulette",
        img: "https://luckmedia.link/evo_double_ball_roulette/thumb.jpg",
      },
      {
        id: 34,
        title: "Speed Auto Roulette",
        img: "https://luckmedia.link/evo_speed_auto_roulette/thumb.jpg",
      },
      {
        id: 35,
        title: "Auto-Roulette VIP",
        img: "https://luckmedia.link/evo_autoroulette_vip/thumb.jpg",
      },
      {
        id: 36,
        title: "Salon Privé Roulette",
        img: "https://luckmedia.link/evo_salon_priv_roulette/thumb.jpg",
      },
      {
        id: 37,
        title: "Casino Malta Roulette",
        img: "https://luckmedia.link/evo_casino_malta_roulette/thumb.jpg",
      },
      {
        id: 38,
        title: "Dragonara Roulette",
        img: "https://luckmedia.link/evo_dragonara_roulette/thumb.jpg",
      },
      {
        id: 39,
        title: "Grand Casino Roulette",
        img: "https://luckmedia.link/evo_grand_casino_roulette/thumb.jpg",
      },
      {
        id: 40,
        title: "Hindi Roulette",
        img: "https://luckmedia.link/evo_hindi_roulette/thumb.jpg",
      },
      {
        id: 41,
        title: "Roulette",
        img: "https://luckmedia.link/aes_roulette/thumb.jpg",
      },
      {
        id: 42,
        title: "Hippodrome Grand Casino",
        img: "https://luckmedia.link/evo_hippodrome_grand_casino/thumb.jpg",
      },
      {
        id: 43,
        title: "Auto Roulette",
        img: "https://luckmedia.link/roy_auto_roulette/thumb.jpg",
      },
      {
        id: 44,
        title: "Italian Roulette",
        img: "https://luckmedia.link/ezg_italian_roulette/thumb.jpg",
      },
      {
        id: 45,
        title: "Speed Roulette",
        img: "https://luckmedia.link/ezg_speed_roulette/thumb.jpg",
      },
      {
        id: 46,
        title: "Diamond Roulette",
        img: "https://luckmedia.link/ezg_diamond_roulette/thumb.jpg",
      },
      {
        id: 47,
        title: "Namaste Roulette",
        img: "https://luckmedia.link/ezg_namaste_roulette/thumb.jpg",
      },
      {
        id: 48,
        title: "Spanish Roulette",
        img: "https://luckmedia.link/ezg_cumbia_ruleta_1/thumb.jpg",
      },
      {
        id: 49,
        title: "Türkçe Rulet",
        img: "https://luckmedia.link/ezg_trke_rulet/thumb.jpg",
      },
      {
        id: 50,
        title: "Fiesta Roulette",
        img: "https://luckmedia.link/ezg_fiesta_roulette/thumb.jpg",
      },
      {
        id: 51,
        title: "Auto Roulette",
        img: "https://luckmedia.link/ezg_auto_roulette/thumb.jpg",
      },
      {
        id: 52,
        title: "Speed Auto Roulette",
        img: "https://luckmedia.link/ezg_speed_auto_roulette/thumb.jpg",
      },
      {
        id: 53,
        title: "Oracle Blaze",
        img: "https://luckmedia.link/ezg_oracle_blaze/thumb.jpg",
      },
      {
        id: 54,
        title: "XXXtreme Lightning Roulette",
        img: "https://luckmedia.link/evo_xxxtreme_lightning_roulette/thumb.jpg",
      },
      {
        id: 55,
        title: "Casino Marina Roulette",
        img: "https://luckmedia.link/ezg_casino_marina_roulette/thumb.jpg",
      },
      {
        id: 56,
        title: "Speed Roulette 1",
        img: "https://luckmedia.link/ppl_speed_roulette_1/thumb.jpg",
      },
      {
        id: 57,
        title: "Roulette 1 Azure",
        img: "https://luckmedia.link/ppl_roulette_1_azure/thumb.jpg",
      },
      {
        id: 58,
        title: "PowerUp Roulette",
        img: "https://luckmedia.link/ppl_powerup_roulette/thumb.jpg",
      },
    ],
    LiveSickBo: [
      {
        id: 1,
        title: "Super Sic Bo",
        img: "https://luckmedia.link/evo_super_sic_bo/thumb.jpg",
      },
      {
        id: 2,
        title: "Sic Bo",
        img: "https://luckmedia.link/ezg_sic_bo/thumb.jpg",
      },
      {
        id: 3,
        title: "Ultimate Sic Bo",
        img: "https://luckmedia.link/ezg_ultimate_sic_bo/thumb.jpg",
      },
      {
        id: 4,
        title: "Mega Sicbo",
        img: "https://luckmedia.link/ppl_mega_sicbo/thumb.jpg",
      },
      {
        id: 5,
        title: "Emperor Sic Bo",
        img: "https://luckmedia.link/evo_emperor_sic_bo/thumb.jpg",
      },
      {
        id: 6,
        title: "Sic Bo",
        img: "https://luckmedia.link/aug_sic_bo/thumb.jpg",
      },
      {
        id: 7,
        title: "SicBo Deluxe",
        img: "https://luckmedia.link/pltl_sicbo_deluxe/thumb.jpg",
      },
      {
        id: 8,
        title: "Sic Bo",
        img: "https://luckmedia.link/pltl_sic_bo/thumb.jpg",
      },
      {
        id: 9,
        title: "Sicbo",
        img: "https://luckmedia.link/kng_sicbo/thumb.jpg",
      },
      {
        id: 10,
        title: "Extra Sicbo",
        img: "https://luckmedia.link/aes_extra_sicbo/thumb.jpg",
      },
      {
        id: 11,
        title: "Sic Bo",
        img: "https://luckmedia.link/aes_sic_bo/thumb.jpg",
      },
    ],
    Lottery: [
      {
        id: 1,
        title: "First Person Mega Ball",
        img: "https://luckmedia.link/evo_first_person_mega_ball/thumb.jpg",
      },
      {
        id: 2,
        title: "Bingo Carnaval",
        img: "https://luckmedia.link/jil_bingo_carnaval/thumb.jpg",
      },
      {
        id: 3,
        title: "Keno",
        img: "https://luckmedia.link/png_keno/thumb.jpg",
      },
      {
        id: 4,
        title: "French Keno",
        img: "https://luckmedia.link/sms_french_keno/thumb.jpg",
      },
      {
        id: 5,
        title: "Russian Keno",
        img: "https://luckmedia.link/sms_russian_keno/thumb.jpg",
      },
      {
        id: 6,
        title: "VIP Keno",
        img: "https://luckmedia.link/sms_vip_keno/thumb.jpg",
      },
      {
        id: 7,
        title: "Keno",
        img: "https://luckmedia.link/spb_keno/thumb.jpg",
      },
      {
        id: 8,
        title: "Extra Bingo",
        img: "https://luckmedia.link/wzd_extra_bingo/thumb.jpg",
      },
    ],
    VirtualSports: [
      {
        id: 1,
        title: "Steeplechase",
        img: "https://luckmedia.link/pgp_steeplechase/thumb.jpg",
      },
      {
        id: 2,
        title: "Force 1",
        img: "https://luckmedia.link/pgp_force_1/thumb.jpg",
      },
      {
        id: 3,
        title: "Fantastic League",
        img: "https://luckmedia.link/pgp_fantastic_league/thumb.jpg",
      },
      {
        id: 4,
        title: "Greyhound Racing",
        img: "https://luckmedia.link/pgp_greyhound_racing/thumb.jpg",
      },
      {
        id: 5,
        title: "Penalty Shootout",
        img: "https://luckmedia.link/pgp_penalty_shootout/thumb.jpg",
      },
      {
        id: 6,
        title: "Horse Racing",
        img: "https://luckmedia.link/pgp_horse_racing/thumb.jpg",
      },
      {
        id: 7,
        title: "Virtual Hound Racing",
        img: "https://luckmedia.link/kng_virtual_hound_racing/thumb.jpg",
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
        <Tab.List className="flex gap-2 rounded-md overflow-x-scroll scroll-x  ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  " rounded-md    px-4 py-1.5 text-xs font-medium  ",
                  "  ",
                  selected
                    ? "bg-skin-imgbg "
                    : "text-skin-secondary bg-skin-cardhead hover:bg-skin-cardhead hover:text-skin-white"
                )
              }
            >
              <img
                className="object-cover w-4 h-4 m-auto "
                src="https://sportsexch.com/images/icons/top_indian_games.png"
                alt=""
              />

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
                //     // 'rounded-md w-full bg-skin-imgbg  p-3',
                //     "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="-m-1 flex flex-wrap md:-m-2">
                {posts.map((post, index) => (
                  <div className="flex  w-1/4 flex-wrap" key={index}>
                    <div className="w-full p-3 md:p-6 text-skin-white text-sm font-bold flex flex-col items-center">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
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
      <Footer />
    </div>
  );
};
